import type { FileUpload } from '@/ui/components/types/business-dashboard.types'
import { DragDropUpload } from '../DragDropUpload'

type Props = {
  photos: FileUpload[]
  onUpload: (files: FileUpload[]) => void
}

export function PhotosForm({ photos, onUpload }: Props) {
  return (
    <div className="p-6">
      <div className="text-sm font-semibold text-slate-700">Business Photos</div>
      <DragDropUpload onFiles={onUpload} />
      {photos?.length ? (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((p) => (
            <img key={p.id} src={p.url} alt={p.name} className="w-full h-28 object-cover rounded-lg border border-slate-200" />
          ))}
        </div>
      ) : null}
    </div>
  )
}
