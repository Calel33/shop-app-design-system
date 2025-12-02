import React, { useRef, useState, DragEvent } from 'react';
import { Paperclip, X, FileIcon } from 'lucide-react';
import { AttachmentZoneProps } from './types';

export const AttachmentZone: React.FC<AttachmentZoneProps> = ({
  attachments,
  onAdd,
  onRemove,
  maxSize = 10 * 1024 * 1024, // 10MB default
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter((file) => file.size <= maxSize);
    
    if (validFiles.length > 0) {
      onAdd(validFiles);
    }
    
    if (validFiles.length < files.length) {
      alert(`Some files exceed the ${formatFileSize(maxSize)} size limit`);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter((file) => file.size <= maxSize);
      
      if (validFiles.length > 0) {
        onAdd(validFiles);
      }
      
      if (validFiles.length < fileArray.length) {
        alert(`Some files exceed the ${formatFileSize(maxSize)} size limit`);
      }
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      {attachments.length > 0 && (
        <div className="space-y-2">
          {attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center justify-between px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md"
            >
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <FileIcon size={16} className="text-zinc-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-zinc-200 truncate">{attachment.name}</p>
                  <p className="text-xs text-zinc-400">{formatFileSize(attachment.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(attachment.id)}
                className="text-zinc-400 hover:text-red-400 transition-colors flex-shrink-0"
                aria-label={`Remove ${attachment.name}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-md p-6 transition-colors ${
          isDragging
            ? 'border-indigo-500 bg-indigo-500/10'
            : 'border-zinc-600 hover:border-zinc-500'
        }`}
      >
        <div className="text-center">
          <Paperclip size={20} className="text-zinc-400 mx-auto mb-2" />
          <p className="text-zinc-400 text-xs mb-1">
            Drag and drop files here or
          </p>
          <button
            type="button"
            onClick={handleBrowseClick}
            className="text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors"
          >
            browse files
          </button>
          <p className="text-zinc-500 text-xs mt-1">
            Max file size: {formatFileSize(maxSize)}
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          aria-label="File upload"
        />
      </div>
    </div>
  );
};
