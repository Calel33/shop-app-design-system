import { useRef, useState } from 'react'
import { UploadCloud } from 'lucide-react'
import type { FileUpload } from '@/ui/components/types/business-dashboard.types'

type Props = {
  onFiles: (files: FileUpload[]) => void
}

export function DragDropUpload({ onFiles }: Props) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const toUpload = (files: File[]) => {
    const valid = files.filter(
      (f) => ['image/jpeg', 'image/png'].includes(f.type) && f.size <= 5 * 1024 * 1024
    )
    const mapped: FileUpload[] = valid.map((f, i) => ({
      id: `${Date.now()}-${i}`,
      name: f.name,
      type: (f.type as 'image/jpeg' | 'image/png') ?? 'image/png',
      size: f.size,
      url: URL.createObjectURL(f),
    }))
    if (mapped.length) onFiles(mapped)
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        toUpload(Array.from(e.dataTransfer.files))
      }}
      onClick={() => inputRef.current?.click()}
      className={
        'mt-2 rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-colors ' +
        (dragging ? 'border-blue-600 bg-blue-50' : 'border-slate-300 hover:border-blue-600 hover:bg-blue-50')
      }
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && inputRef.current?.click()}
      aria-label="Upload images. Click or drag and drop."
    >
      <UploadCloud className="h-12 w-12 mx-auto text-slate-400" />
      <p className="mt-3 text-slate-700 font-medium">Drag and drop photos here</p>
      <p className="text-sm text-slate-500">or click to browse • JPG, PNG up to 5MB each</p>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) toUpload(Array.from(e.target.files))
        }}
      />
    </div>
  )
}
