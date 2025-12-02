import { paramCase } from 'param-case';
import type { RawComponentMeta, ComponentMeta } from '../types/ComponentMeta';

/**
 * Categorization rules from config
 */
interface CategorizationRules {
  categoryByDir?: Record<string, string>;
  categoryByName?: Record<string, string>;
}

/**
 * Normalizes raw component metadata into structured component entries
 * Applies categorization rules, generates IDs, derives tags
 */
export class ComponentNormalizer {
  private rules: CategorizationRules;
  private usedIds: Set<string> = new Set();

  constructor(rules: CategorizationRules = {}) {
    this.rules = rules;
  }

  /**
   * Normalize a batch of raw components
   */
  normalize(rawComponents: RawComponentMeta[]): ComponentMeta[] {
    return rawComponents.map((raw) => this.normalizeOne(raw));
  }

  /**
   * Normalize a single raw component
   */
  private normalizeOne(raw: RawComponentMeta): ComponentMeta {
    // Determine category
    const category = this.determineCategory(raw);

    // Derive tags from path and name
    const tags = this.deriveTags(raw, category);

    // Generate unique ID
    const id = this.generateUniqueId(raw.name);

    return {
      ...raw,
      id,
      category,
      tags,
      status: raw.status || 'stable',
    };
  }

  /**
   * Determine category with priority:
   * 1. Explicit JSDoc @dsCategory
   * 2. categoryByDir rules
   * 3. categoryByName rules
   * 4. Default: 'domain'
   */
  private determineCategory(raw: RawComponentMeta): string {
    // Already set in raw (from JSDoc)
    if (raw.category) {
      return raw.category;
    }

    // Try categoryByDir rules
    if (this.rules.categoryByDir) {
      for (const [dirPattern, category] of Object.entries(this.rules.categoryByDir)) {
        if (raw.filePath.includes(dirPattern.replace(/\\/g, '/'))) {
          return category;
        }
      }
    }

    // Try categoryByName rules
    if (this.rules.categoryByName && this.rules.categoryByName[raw.name]) {
      return this.rules.categoryByName[raw.name];
    }

    // Default category based on root
    const defaultsByRoot: Record<string, string> = {
      'core-ui': 'primitive',
      'biz-ui': 'domain-business',
      layout: 'layout',
      ui2: 'extended',
    };

    return defaultsByRoot[raw.rootId] || 'domain';
  }

  /**
   * Derive tags from component path and name
   */
  private deriveTags(raw: RawComponentMeta, category: string): string[] {
    const tags: Set<string> = new Set();

    // Add category as a tag
    tags.add(category);

    // Add component name (lowercased)
    tags.add(raw.name.toLowerCase());

    // Add tags from path
    const pathParts = raw.filePath.split('/');
    pathParts.forEach((part) => {
      // Skip file extensions and common directories
      if (!part.includes('.') && !['src', 'components', 'ui', 'ui2', 'business', 'layout'].includes(part)) {
        tags.add(part.toLowerCase());
      }
    });

    // Add explicit tags if present
    if (raw.tags && raw.tags.length > 0) {
      raw.tags.forEach((tag) => tags.add(tag.toLowerCase()));
    }

    return Array.from(tags);
  }

  /**
   * Generate unique ID (slug) from component name
   * Handles collisions by appending suffixes
   */
  private generateUniqueId(name: string): string {
    let baseId = paramCase(name);
    let id = baseId;
    let counter = 1;

    // Ensure uniqueness
    while (this.usedIds.has(id)) {
      id = `${baseId}-${counter}`;
      counter++;
    }

    this.usedIds.add(id);
    return id;
  }
}
