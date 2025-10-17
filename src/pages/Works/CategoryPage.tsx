// src/pages/Works/CategoryPage.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import { getCategoryById } from '../../data/works'

export default function CategoryPage() {
  const { categoryId } = useParams()
  if (!categoryId) return <div>Keine Kategorie ausgewählt.</div>
  const cat = getCategoryById(categoryId)
  if (!cat) return <div>Kategorie nicht gefunden.</div>

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h1>{cat.title}</h1>
        <Link to="/arbeiten" className="text-sm text-gray-600 hover:underline">
          Zurück
        </Link>
      </div>
      <Carousel items={cat.works} />
    </section>
  )
}
