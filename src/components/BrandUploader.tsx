import React from 'react'

interface Props {
  onUpload: (text: string) => void
}

export const BrandUploader: React.FC<Props> = ({ onUpload }) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onUpload(String(reader.result))
    reader.readAsText(file)
  }

  return (
    <div className="p-4 border rounded">
      <input type="file" accept=".txt" onChange={handleFile} />
    </div>
  )
}
