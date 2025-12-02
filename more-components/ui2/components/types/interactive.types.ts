/**
 * Interactive Component Types
 * 
 * Type definitions for interactive UI components including
 * camping experience selectors and expandable cards.
 */

import { ReactNode } from 'react';

/**
 * Props for individual camping experience card
 */
export interface CampingExperienceProps {
  /** Background image URL for the card */
  image: string;
  
  /** Icon element (Lucide React icon or custom) */
  icon: ReactNode;
  
  /** Main title of the experience */
  title: string;
  
  /** Subtitle or description */
  subtitle: string;
  
  /** Whether this card should be active by default */
  defaultActive?: boolean;
}

/**
 * Props for the experience selector container
 */
export interface ExperienceSelectorProps {
  /** Array of camping experiences to display */
  experiences: CampingExperienceProps[];
  
  /** Callback when an experience is selected */
  onSelect?: (index: number) => void;
  
  /** Optional CSS class name */
  className?: string;
  
  /** Optional heading text */
  heading?: string;
  
  /** Optional subheading text */
  subheading?: string;
}

/**
 * Internal props for ExperienceCard component
 */
export interface ExperienceCardProps extends CampingExperienceProps {
  /** Whether this card is currently active/expanded */
  isActive: boolean;
  
  /** Click handler for the card */
  onClick: () => void;
  
  /** Animation delay for entrance animation (in ms) */
  animationDelay: number;
}
