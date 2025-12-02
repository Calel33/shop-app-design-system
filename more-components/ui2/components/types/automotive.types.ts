export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  trim?: string
  price: number
  msrp?: number
  availability: 'available' | 'limited' | 'sold-out' | 'coming-soon'
  mileage?: number
  condition: 'new' | 'used' | 'certified-pre-owned'
  vin?: string
  stockNumber?: string
}

export interface VehicleImage {
  id: string
  url: string
  alt: string
  category: 'exterior' | 'interior' | 'engine' | 'features' | 'other'
  isPrimary: boolean
  thumbnailUrl?: string
  highResUrl?: string
}

export interface VehicleSpecification {
  category: string
  specs: Array<{
    label: string
    value: string | number
    icon?: string
  }>
}

export interface VehicleFeature {
  id: string
  name: string
  description?: string
  included: boolean
  category: 'standard' | 'optional' | 'package'
  icon?: string
}

export interface PriceBreakdownItem {
  label: string
  amount: number
  type: 'base' | 'option' | 'fee' | 'tax' | 'discount' | 'total'
  description?: string
}

export interface FinancingOption {
  type: 'lease' | 'finance' | 'cash'
  monthlyPayment?: number
  downPayment: number
  termMonths?: number
  apr?: number
  description: string
}

export interface DealerInfo {
  id: string
  name: string
  address: string
  phone: string
  email?: string
  website?: string
  hours: string
  rating?: number
  distance?: number
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone' | 'text'
  message?: string
  requestType: 'test-drive' | 'quote' | 'financing' | 'trade-in' | 'general'
  preferredTime?: string
}

export interface VehicleGalleryProps {
  images: VehicleImage[]
  vehicle: Vehicle
  onImageSelect?: (image: VehicleImage) => void
  className?: string
}

export interface VehicleSpecsProps {
  specifications: VehicleSpecification[]
  features: VehicleFeature[]
  className?: string
  expandable?: boolean
}

export interface PriceBreakdownProps {
  basePrice: number
  breakdown: PriceBreakdownItem[]
  financingOptions: FinancingOption[]
  className?: string
  showCalculator?: boolean
}

export interface ContactDealerProps {
  dealer: DealerInfo
  vehicle: Vehicle
  onSubmit: (data: ContactFormData) => void | Promise<void>
  className?: string
  showTestDrive?: boolean
}

export interface CarDetailGalleryProps {
  vehicle: Vehicle
  images: VehicleImage[]
  specifications: VehicleSpecification[]
  features: VehicleFeature[]
  priceBreakdown: PriceBreakdownItem[]
  financingOptions: FinancingOption[]
  dealer: DealerInfo
  onContactSubmit: (data: ContactFormData) => void | Promise<void>
  className?: string
}

export interface GalleryState {
  currentImageIndex: number
  isFullscreen: boolean
  isZoomed: boolean
  selectedCategory: VehicleImage['category'] | 'all'
}

export interface VehicleComparisonProps {
  vehicles: Vehicle[]
  onCompare?: (vehicleIds: string[]) => void
  maxComparisons?: number
  className?: string
}

export type VehicleColorOption = {
  name: string
  hex: string
  images: VehicleImage[]
  additionalCost?: number
}

export type VehicleTrimOption = {
  name: string
  price: number
  features: VehicleFeature[]
  images: VehicleImage[]
}