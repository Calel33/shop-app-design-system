#!/usr/bin/env python3
"""
Build slim ui2 index + namespace detail files.
Splits ui2-component-index.json into category folders.
"""

import json
from pathlib import Path

def build_ui2_index():
    script_dir = Path(__file__).parent
    source_file = script_dir / "ui2-component-index.json"
    components_dir = script_dir / "components"
    
    # Read original
    with open(source_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    namespaces = data.get("namespaces", {})
    
    # Build slim index
    slim_namespaces = {}
    total_components = 0
    
    for ns_key, ns_data in namespaces.items():
        components = ns_data.get("components", {})
        component_count = len(components)
        total_components += component_count
        
        # Skip root namespace for detail files
        if ns_key == "root":
            slim_namespaces[ns_key] = ns_data
            continue
        
        slim_namespaces[ns_key] = {
            "description": ns_data.get("description", ""),
            "location": ns_data.get("location", ""),
            "componentCount": component_count,
            "components": list(components.keys()),
            "detailFile": f"components/{ns_key}/index.json"
        }
    
    # Create slim main index
    slim_index = {
        "$schema": data.get("$schema"),
        "$id": data.get("$id"),
        "meta": {
            **data.get("meta", {}),
            "indexType": "slim",
            "totalComponents": total_components,
            "namespaceCount": len(namespaces),
            "note": "Slim index for quick lookup. Full docs in components/{namespace}/index.json"
        },
        "namespaces": slim_namespaces,
        "aiAgentGuidance": {
            "howToUse": [
                "1. Read this slim index to discover available namespaces and components",
                "2. Find component by name or browse by namespace",
                "3. Read the detailFile for full component list with file paths",
                "4. Example: Need admin components? Read components/admin/index.json"
            ]
        }
    }
    
    # Backup original
    backup_path = script_dir / "ui2-component-index.full.json"
    with open(source_file, "r", encoding="utf-8") as f:
        original_content = f.read()
    with open(backup_path, "w", encoding="utf-8") as f:
        f.write(original_content)
    print(f"Backed up original to: {backup_path}")
    
    # Write slim index
    with open(source_file, "w", encoding="utf-8") as f:
        json.dump(slim_index, f, indent=2)
    slim_lines = len(json.dumps(slim_index, indent=2).split('\n'))
    print(f"Created slim index: {source_file} (~{slim_lines} lines)")
    
    # Create namespace detail files
    for ns_key, ns_data in namespaces.items():
        if ns_key == "root":
            continue
            
        components = ns_data.get("components", {})
        
        detail_file = {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": f"https://testdesign.local/ui2/components/{ns_key}/index.json",
            "meta": {
                "namespace": ns_key,
                "description": ns_data.get("description", ""),
                "location": ns_data.get("location", ""),
                "componentCount": len(components)
            },
            "components": components
        }
        
        output_path = components_dir / ns_key / "index.json"
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(detail_file, f, indent=2)
        
        print(f"Created: components/{ns_key}/index.json ({len(components)} components)")
    
    # Summary
    print(f"\n=== Summary ===")
    print(f"Slim index: ~{slim_lines} lines (was 1987)")
    print(f"Namespace files: {len(namespaces) - 1} files")
    print(f"Total components: {total_components}")
    print(f"Full backup: ui2-component-index.full.json")

if __name__ == "__main__":
    build_ui2_index()
