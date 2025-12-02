import { MapPin, Clock, Phone, Globe, Tags, Image as ImageIcon } from 'lucide-react'
import type { BusinessEditData } from '@/ui/components/types/business-dashboard.types'

export function BusinessCardPreview({ data }: { data: BusinessEditData }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
        <ImageIcon className="h-10 w-10 opacity-80" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold">{data.name || 'Business Name'}</h3>
        <div className="text-blue-700 font-medium">{data.category || 'Category'}</div>
        <p className="text-slate-600">{data.description || 'Business description will appear here.'}</p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1" /> {data.address || 'Address'}</li>
          <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-1" /> {data.status === 'open' ? `Open • Closes at ${data.closingTime ?? '8:00 PM'}` : 'Closed'}</li>
          {data.phone && <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-1" /> {data.phone}</li>}
          {data.website && <li className="flex items-start gap-2"><Globe className="h-4 w-4 mt-1" /> {data.website}</li>}
          {data.tags?.length ? (
            <li className="flex items-start gap-2"><Tags className="h-4 w-4 mt-1" /> {data.tags.join(', ')}</li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
