# Hotel Booking Navigation & Hero

Elegant booking experience with glassmorphic nav, hero with gradient overlay, booking form, and animated rooms grid.

Example:

```tsx
import { HotelHero } from '@/ui/components/hotel';

<HotelHero
  backgroundImage="/hotel.jpg"
  navigation={{
    brandName: 'Serenity Suites',
    tagline: 'Luxury by the Shore',
    navItems: [
      { label: 'Suites', href: '#suites' },
      { label: 'Dining', href: '#dining' },
      { label: 'Spa', href: '#spa' },
    ],
    phone: '+1 (800) 555-0199',
    onReserve: () => {},
  }}
  onSearch={(data) => console.log(data)}
  rooms={[
    { image: '/r1.jpg', title: 'Deluxe Suite', description: 'Ocean view, king bed', pricePerNight: 320, onBook: () => {} },
  ]}
  enableAnimations
/>
```
