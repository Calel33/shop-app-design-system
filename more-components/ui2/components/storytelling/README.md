# Multi-Chapter Scroll Story Component

Immersive scroll-based storytelling experience with custom cursor, smooth transitions, and animated chapters.

## 🎨 Features

- **Scroll Hijacking**: Smooth wheel-based chapter navigation
- **Custom Cursor**: Mix-blend-mode cursor effect
- **Keyboard Navigation**: Arrow keys, Page Up/Down, Home, End
- **Staggered Animations**: Fade-in effects with blur and scale
- **Ultra-Thin Typography**: Responsive clamp() sizing
- **Full-Screen Chapters**: 100vh chapters with gradients
- **Decorative Elements**: Animated circles, dots, geometric shapes
- **Accessibility**: ARIA labels, keyboard support, reduced motion

## 📦 Components

- **`ScrollStory`**: Main container component
- **`CustomCursor`**: Custom cursor with mix-blend-mode
- **`ChapterNavigation`**: Fixed chapter indicator
- **`Chapter`**: Individual chapter component
- **`ChapterContent`**: Content wrapper with animations
- **`useScrollNavigation`**: Custom hook for scroll logic

## 🚀 Quick Start

```tsx
import { ScrollStory } from './alimonyapp/componets/storytelling';

const chapters = [
  {
    number: '01',
    gradient: 'bg-gradient-to-b from-black via-gray-900 to-black',
    content: {
      heading: 'In the beginning, there was only darkness.',
      paragraphs: ['A void waiting to be filled with imagination...'],
    },
  },
  {
    number: '02',
    gradient: 'bg-gradient-to-br from-purple-900 via-blue-900 to-black',
    content: {
      heading: 'Then came the first spark of light.',
      paragraphs: ['Ideas began to form...'],
    },
    decorations: [
      { type: 'pulse-dot', position: { top: '25%', left: '25%' } },
    ],
  },
];

<ScrollStory chapters={chapters} />
```

## 🎨 Chapter Structure

```tsx
const chapter = {
  number: '01', // or number
  gradient: 'bg-gradient-to-br from-blue-900 to-black',
  content: {
    heading: 'Chapter Title',
    paragraphs: ['Paragraph 1', 'Paragraph 2'],
    features: [
      {
        icon: <div>Icon</div>,
        title: 'Feature Title',
        description: 'Feature description',
      },
    ],
    cta: {
      text: 'Call to Action',
      onClick: () => alert('Clicked!'),
    },
  },
  decorations: [
    { type: 'pulse-dot', position: { top: '20%', left: '30%' }, color: 'white' },
    { type: 'spinning-circle', size: '20rem', animationDuration: 20 },
  ],
  layout: 'center', // or 'split', 'grid'
};
```

## 🎯 Props

### ScrollStoryProps

```tsx
{
  chapters: Chapter[];
  onChapterChange?: (chapterIndex: number) => void;
  enableCustomCursor?: boolean; // default: true
  enableKeyboardNav?: boolean; // default: true
  transitionDuration?: number; // default: 1200ms
  staggerDelay?: number; // default: 400ms
}
```

## 🎨 Gradients

Tailwind gradient classes for chapters:
- `bg-gradient-to-b from-black via-gray-900 to-black`
- `bg-gradient-to-br from-purple-900 via-blue-900 to-black`
- `bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900`
- `bg-gradient-to-br from-teal-900 via-green-900 to-emerald-900`
- `bg-gradient-to-br from-emerald-900 via-yellow-900 to-orange-900`
- `bg-gradient-to-b from-orange-900 via-red-900 to-black`

## ♿ Accessibility

- Keyboard navigation (Arrow keys, Page keys, Home, End)
- ARIA labels for navigation
- Screen reader announcements
- Focus management
- Reduced motion support

## 📚 Documentation

See `INSTALLATION.md` for setup and `USAGE_EXAMPLE.tsx` for complete examples.
