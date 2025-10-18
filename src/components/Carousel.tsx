import { useState } from 'react'
import type { Artwork } from '../data/works'

export default function Carousel({ items }: { items: Artwork[] }) {
  const [index, setIndex] = useState(0)
  if (!items || items.length === 0) return <div>Keine Arbeiten vorhanden.</div>

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  const active = items[index]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Carousel Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-lg w-full aspect-[4/3] flex items-center justify-center bg-gray-100 mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}images/${active.image}`}
            alt={active.title}
            className="w-full h-full object-contain"
          />
        </div>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded shadow">
          ‹
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded shadow">
          ›
        </button>
      </div>

      {/* Metadata */}
      <div className="mt-4 p-4 border rounded">
        <h3 className="text-lg font-semibold">{active.title}</h3>
        <p className="text-sm text-gray-600">Entstehungsjahr: {active.year}</p>
        {active.material && <p className="text-sm text-gray-600">Material: {active.material.join(', ')}</p>}
        <p className="text-sm text-gray-600">
          Maße: {active.size.width} × {active.size.height}{active.size.depth ? ` × ${active.size.depth}` : ''} cm
        </p>
        {active.comment && <p className="text-sm text-gray-600">Kommentar: {active.comment}</p>}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => setIndex(i)}
            className={`rounded overflow-hidden border ${i === index ? 'ring-2 ring-black' : 'border-gray-200'}`}
          >
            <img src={`${import.meta.env.BASE_URL}images/t_${it.image}`} alt={it.title} className="w-full h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}