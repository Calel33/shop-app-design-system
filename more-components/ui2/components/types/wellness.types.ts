export interface MeditationSession {
  id: string;
  title: string;
  category: 'daily' | 'sleep' | 'breath' | 'focus' | 'anxiety' | 'compassion';
  duration: number;
  completed?: boolean;
  backgroundImage: string;
  badge?: string;
  stats?: SessionStats;
}

export interface SessionStats {
  streak?: number;
  minutesCompleted?: number;
  improvement?: number;
}

export interface SessionCategory {
  name: string;
  color: string;
  sessionCount: number;
  icon: React.ReactNode;
}

export interface MeditationGridProps {
  sessions: MeditationSession[];
  categories: SessionCategory[];
  userProgress?: {
    hoursThisMonth: number;
    focusImprovement: number;
    stressReduction: number;
  };
}
