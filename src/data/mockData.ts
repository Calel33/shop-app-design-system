export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  website?: string;
  hours: string;
  images: string[];
  lat: number;
  lng: number;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  tags: string[];
  featured: boolean;
}

export const categories = [
  'Restaurants',
  'Hotels',
  'Tours & Activities',
  'Shopping',
  'Services',
  'Healthcare',
  'Education',
  'Entertainment',
];

export const cities = [
  'Belize City',
  'San Pedro',
  'Caye Caulker',
  'Placencia',
  'San Ignacio',
  'Dangriga',
  'Corozal',
  'Orange Walk',
];

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Blue Hole Dive Shop',
    category: 'Tours & Activities',
    description: 'Premier diving and snorkeling tours to the Great Blue Hole and surrounding reefs. Expert guides and top-quality equipment.',
    address: '123 Barrier Reef Drive',
    city: 'San Pedro',
    phone: '+501-226-2345',
    website: 'https://blueholedive.bz',
    hours: 'Mon-Sun: 7:00 AM - 6:00 PM',
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'],
    lat: 17.9158,
    lng: -87.9651,
    status: 'approved',
    tags: ['diving', 'snorkeling', 'tours', 'blue hole'],
    featured: true,
  },
  {
    id: '2',
    name: 'Cahal Pech Village Resort',
    category: 'Hotels',
    description: 'Boutique hotel overlooking San Ignacio with stunning views of the Mayan ruins. Pool, restaurant, and spa services available.',
    address: 'Cahal Pech Hill',
    city: 'San Ignacio',
    phone: '+501-824-3740',
    website: 'https://cahalpech.com',
    hours: '24/7',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'],
    lat: 17.1598,
    lng: -89.0696,
    status: 'approved',
    tags: ['hotel', 'resort', 'pool', 'restaurant'],
    featured: true,
  },
  {
    id: '3',
    name: 'Elvi\'s Kitchen',
    category: 'Restaurants',
    description: 'Iconic beachfront restaurant serving fresh seafood and traditional Belizean cuisine since 1974.',
    address: 'Pescador Drive',
    city: 'San Pedro',
    phone: '+501-226-2176',
    website: 'https://elviskitchen.com',
    hours: 'Mon-Sat: 11:00 AM - 10:00 PM, Sun: Closed',
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'],
    lat: 17.9189,
    lng: -87.9654,
    status: 'approved',
    tags: ['seafood', 'belizean', 'beachfront', 'dining'],
    featured: true,
  },
  {
    id: '4',
    name: 'Placencia Pharmacy',
    category: 'Healthcare',
    description: 'Full-service pharmacy with prescription medications, over-the-counter drugs, and health supplies.',
    address: 'Main Street',
    city: 'Placencia',
    phone: '+501-523-3346',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM',
    images: ['https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800'],
    lat: 16.5142,
    lng: -88.3661,
    status: 'approved',
    tags: ['pharmacy', 'healthcare', 'medicine'],
    featured: false,
  },
  {
    id: '5',
    name: 'Belize Chocolate Company',
    category: 'Shopping',
    description: 'Artisan chocolate made from organic Belizean cacao. Tours and tastings available.',
    address: '1 Mile George Price Highway',
    city: 'San Ignacio',
    phone: '+501-824-4050',
    website: 'https://belizechocolate.com',
    hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
    images: ['https://images.unsplash.com/photo-1511381939415-e44015466834?w=800', 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800'],
    lat: 17.1567,
    lng: -89.0712,
    status: 'approved',
    tags: ['chocolate', 'artisan', 'tours', 'shopping'],
    featured: true,
  },
  {
    id: '6',
    name: 'Caye Caulker Water Taxi',
    category: 'Services',
    description: 'Regular water taxi service between Belize City, Caye Caulker, and San Pedro.',
    address: 'Marine Terminal',
    city: 'Belize City',
    phone: '+501-223-5752',
    website: 'https://cayecaulkerwatertaxi.com',
    hours: 'Daily: 6:30 AM - 5:30 PM',
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
    lat: 17.4991,
    lng: -88.1871,
    status: 'approved',
    tags: ['transportation', 'water taxi', 'ferry'],
    featured: false,
  },
  {
    id: '7',
    name: 'ATM Cave Tours',
    category: 'Tours & Activities',
    description: 'Guided tours to the Actun Tunichil Muknal cave, one of Belize\'s most spectacular Mayan archaeological sites.',
    address: 'Branch Mouth Road',
    city: 'San Ignacio',
    phone: '+501-824-2031',
    hours: 'Daily: 7:00 AM - 3:00 PM',
    images: ['https://images.unsplash.com/photo-1473654729523-203e25dfda10?w=800'],
    lat: 17.1789,
    lng: -88.9234,
    status: 'submitted',
    tags: ['cave', 'mayan', 'archaeology', 'adventure'],
    featured: false,
  },
  {
    id: '8',
    name: 'Rumfish y Vino',
    category: 'Restaurants',
    description: 'Upscale dining with fusion cuisine, extensive wine list, and waterfront views.',
    address: 'Placencia Sidewalk',
    city: 'Placencia',
    phone: '+501-523-3293',
    website: 'https://rumfishyvino.com',
    hours: 'Tue-Sun: 5:00 PM - 10:00 PM, Mon: Closed',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'],
    lat: 16.5156,
    lng: -88.3668,
    status: 'approved',
    tags: ['fine dining', 'wine', 'fusion', 'waterfront'],
    featured: false,
  },
];

export const ownerListings: Business[] = [
  mockBusinesses[6], // submitted
  {
    id: '9',
    name: 'My New Restaurant',
    category: 'Restaurants',
    description: 'A new dining experience coming soon...',
    address: '456 Main Street',
    city: 'Belize City',
    phone: '+501-223-1234',
    hours: 'Mon-Sat: 11:00 AM - 9:00 PM',
    images: [],
    lat: 17.5,
    lng: -88.2,
    status: 'draft',
    tags: ['restaurant', 'new'],
    featured: false,
  },
];

