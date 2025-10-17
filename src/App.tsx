import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import WorksIndex from './pages/Works/WorksIndex'
import CategoryPage from './pages/Works/CategoryPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dienstleistungen" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/arbeiten" element={<WorksIndex />} />
          <Route path="/arbeiten/:categoryId" element={<CategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Ute O'Grady</footer>
    </div>
  )
}