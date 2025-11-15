export interface GymTrainer {
  initials: string;
  name: string;
  role: string;
  certifications: string;
  experience: string;
}

export interface GymPricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  variant?: 'default' | 'featured';
}

export interface GymClass {
  time: string;
  name: string;
  spots: string;
}

export interface GymHour {
  day: string;
  time: string;
  isOpen?: boolean;
}

export const gymDetails = {
  name: 'Iron Will CrossFit',
  categories: 'CrossFit Gym • Functional Fitness • Personal Training',
  rating: 4.9,
  reviewCount: 89,
  distance: '1.2 miles away',
  openStatus: 'Open until 9:00 PM',
  spotsLeft: '15 spots left today',
  description:
    "Transform your fitness journey at Iron Will CrossFit, where elite coaching meets community spirit. Our certified trainers guide you through constantly varied, high-intensity functional movements that deliver real-world strength and conditioning. Whether you're a complete beginner or seasoned athlete, our scalable workouts and supportive community will help you achieve your fitness goals faster than you ever thought possible.",
  heroImage:
    'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=1200&auto=format&fit=crop&q=80',
};

export const gymHighlights = [
  {
    icon: 'dumbbell',
    title: 'Elite Equipment',
    description: 'Rogue fitness gear, Olympic platforms, endless ropes',
  },
  {
    icon: 'users',
    title: 'Small Classes',
    description: 'Max 12 athletes per class for personalized attention',
  },
  {
    icon: 'medal',
    title: 'Certified Coaches',
    description: 'Level 2+ CrossFit trainers with 5+ years experience',
  },
];

export const gymTrainers: GymTrainer[] = [
  {
    initials: 'JS',
    name: 'Jake Sullivan',
    role: 'Head Coach & Owner',
    certifications: 'CF-L3, USAW, Precision Nutrition',
    experience: '8 years CrossFit coaching, former Navy SEAL',
  },
  {
    initials: 'MR',
    name: 'Maria Rodriguez',
    role: 'Senior Coach',
    certifications: 'CF-L2, RKC, Mobility Specialist',
    experience: '6 years coaching, former competitive gymnast',
  },
  {
    initials: 'TC',
    name: 'Tyler Chen',
    role: 'Assistant Coach',
    certifications: 'CF-L2, FMS, Sports Nutrition',
    experience: '4 years coaching, powerlifting background',
  },
  {
    initials: 'AL',
    name: 'Alex Liu',
    role: 'Coach & PT',
    certifications: 'CF-L2, DPT, Corrective Exercise',
    experience: '5 years coaching, Doctor of Physical Therapy',
  },
];

export const gymPricingPlans: GymPricingPlan[] = [
  {
    name: 'Drop-In',
    price: '$35',
    period: 'class',
    features: [
      'Single class access',
      'All equipment included',
      'Beginner friendly',
      'No commitment',
    ],
    ctaLabel: 'Try a Class',
  },
  {
    name: 'Unlimited',
    price: '$185',
    period: 'month',
    features: [
      'Unlimited classes',
      'Open gym access',
      'Nutrition coaching',
      'Member events',
      'Progress tracking',
    ],
    ctaLabel: 'Start Today',
    variant: 'featured',
  },
  {
    name: '8 Classes',
    price: '$220',
    period: 'month',
    features: [
      '8 classes per month',
      'Roll over 2 classes',
      'Open gym 2x/week',
      'Flexibility focused',
    ],
    ctaLabel: 'Get Started',
  },
];

export const gymClasses: GymClass[] = [
  { time: '6:00 AM', name: 'Morning Strength', spots: '3 spots' },
  { time: '7:15 AM', name: 'CrossFit WOD', spots: 'Full' },
  { time: '9:30 AM', name: 'Beginner Friendly', spots: '7 spots' },
  { time: '12:00 PM', name: 'Lunch WOD', spots: '5 spots' },
  { time: '5:30 PM', name: 'CrossFit WOD', spots: '2 spots' },
  { time: '6:45 PM', name: 'Competition Team', spots: 'Invite only' },
];

export const gymHours: GymHour[] = [
  { day: 'Monday', time: '5:30 AM - 9:00 PM' },
  { day: 'Tuesday', time: '5:30 AM - 9:00 PM', isOpen: true },
  { day: 'Wednesday', time: '5:30 AM - 9:00 PM' },
  { day: 'Thursday', time: '5:30 AM - 9:00 PM' },
  { day: 'Friday', time: '5:30 AM - 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
  { day: 'Sunday', time: '9:00 AM - 5:00 PM' },
];

export const gymAddressLines = [
  '2847 Industrial Blvd',
  'Springfield, IL 62702',
];

export const gymPhone = '(217) 555-8765';
export const gymWebsite = 'https://ironwillcrossfit.com';
export const gymCapacity = 'Max 12 athletes per class';

export const gymLastUpdated = 'Last updated by owner on March 18, 2024';
