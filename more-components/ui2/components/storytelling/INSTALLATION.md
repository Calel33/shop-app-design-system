# Installation Guide - Scroll Story Component

## Prerequisites

- React 18+ or 19+
- TypeScript 5+
- Tailwind CSS 3+

## Step 1: Verify Dependencies

All dependencies should already be installed. No additional packages required.

## Step 2: Import CSS

The component automatically imports `scroll-story.css`. Ensure your build system supports CSS imports.

## Step 3: Usage

```tsx
import { ScrollStory } from './alimonyapp/componets/storytelling';

const chapters = [
  {
    number: '01',
    gradient: 'bg-gradient-to-b from-black via-gray-900 to-black',
    content: {
      heading: 'Your story begins here.',
      paragraphs: ['Welcome to an immersive experience.'],
    },
  },
];

<ScrollStory chapters={chapters} />
```

## Step 4: Font Weights

The component uses ultra-thin fonts (font-weight: 100). Ensure your chosen font supports these weights.

## Step 5: Test Navigation

- **Wheel**: Scroll up/down to navigate chapters
- **Keyboard**: Arrow Up/Down, Page Up/Down, Home, End
- **Custom Cursor**: Should follow mouse with mix-blend-mode

## Troubleshooting

### Scroll not working
- Ensure no other scroll-lock mechanisms are active
- Check browser console for errors

### Custom cursor not visible
- Ensure `enableCustomCursor={true}` (default)
- Check that `cursor: none` is applied to body

### Animations not smooth
- Check `transitionDuration` prop (default 1200ms)
- Verify browser supports mix-blend-mode

## Next Steps

See `USAGE_EXAMPLE.tsx` for complete implementation examples.
