export type FormTabType = 'basic' | 'hours' | 'photos' | 'contact'

export type ApprovalStatus = 'draft' | 'pending' | 'approved' | 'rejected'

export interface VersionHistory {
  timestamp: string
  version: number
}

export interface FileUpload {
  id: string
  name: string
  type: 'image/jpeg' | 'image/png'
  size: number
  url: string
}

export interface BusinessHoursDay {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
  open: string
  close: string
  closed?: boolean
}

export interface BusinessHours {
  days: BusinessHoursDay[]
}

export interface BusinessEditData {
  id: string
  name: string
  category: string
  description: string
  address: string
  tags: string[]
  phone?: string
  website?: string
  email?: string
  photos: FileUpload[]
  hours?: BusinessHours
  status: 'open' | 'closed'
  closingTime?: string
}

export interface DashboardState {
  activeTab: FormTabType
  formData: BusinessEditData
  uploadedFiles: FileUpload[]
  isDragging: boolean
  isDraft: boolean
  lastSaved: string
  approvalStatus: ApprovalStatus
  version: number
}
