// Digital Health Dashboard Type Definitions
// Centralized types for the PulseSync health monitoring interface

export interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  imageAlt?: string;
}

export interface PatientData {
  name: string;
  condition: string;
  message?: string;
}

export interface ConsultationCardProps {
  patient: PatientData;
  time: {
    day: string;
    hour: string;
  };
  countdown?: string;
  onChatClick?: () => void;
}

export interface AppIcon {
  name: string;
  component: React.ComponentType;
}

export interface AppPreviewCardProps {
  appName: string;
  screenshot: string;
  icons?: AppIcon[];
}

export interface BrandCardProps {
  logo: {
    text: string;
  };
  tagline: string;
  backgroundImage?: string;
}

export interface MobileAppCardProps {
  title: string;
  mockupImage: string;
  cta: {
    label: string;
    onClick: () => void;
  };
}

export interface StyleGuideCardProps {
  typography: {
    primary: string;
    secondary: string;
  };
  palette: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'doctor' | 'patient' | 'coach';
  timestamp?: string;
}

export interface ChatTeaserCardProps {
  title: string;
  messages: ChatMessage[];
  avatar?: {
    src: string;
    name: string;
  };
  backgroundImage?: string;
}

export interface GlucoseReading {
  day: string;
  value: number;
}

export interface GlucoseChartCardProps {
  title: string;
  data: GlucoseReading[];
  targetRange: {
    min: number;
    max: number;
    description: string;
  };
  onRefresh?: () => void;
}

export interface MessageBubbleProps {
  text: string;
  variant: 'sent' | 'received';
}

export interface CountdownBadgeProps {
  label: string;
  variant?: 'warning' | 'info' | 'success';
}

export interface HealthDashboardGridProps {
  children: React.ReactNode;
  animationEnabled?: boolean;
}
