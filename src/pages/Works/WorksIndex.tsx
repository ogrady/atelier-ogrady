// src/pages/Works/WorksIndex.tsx
import { Link } from 'react-router-dom'
import { categories } from '../../data/works'
import { toGerman } from '../../data/categoryLabels';

export default function WorksIndex() {
  return (
    <section>
      <h1 className="mb-6">Arbeiten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((c) => {
          const sampleWork = c.works[0];
          const bgImage = sampleWork ? `${import.meta.env.BASE_URL}images/${sampleWork.image}` : ''

          return (
            <Link
              key={c.id}
              to={`/arbeiten/${c.id}`}
              className="relative border rounded p-4 overflow-hidden flex flex-col justify-end h-48 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {bgImage && (
                <img
                  src={bgImage}
                  alt={sampleWork?.title}
                  className="absolute bottom-0 right-0 w-full h-full object-cover opacity-30 pointer-events-none"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-900 relative z-10">{toGerman(c.title)}</h2>
              <p className="text-sm text-gray-600 relative z-10">{c.works.length} Arbeiten</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}