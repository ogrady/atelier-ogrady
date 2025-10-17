// src/pages/Works/WorksIndex.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/works'

export default function WorksIndex() {
  return (
    <section>
      <h1 className="mb-6">Arbeiten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((c) => (
          <Link key={c.id} to={`/arbeiten/${c.id}`} className="border rounded p-4 hover:shadow">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="text-sm text-gray-600">{c.works.length} Arbeiten</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
