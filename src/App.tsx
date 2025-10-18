import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import WorksIndex from './pages/Works/WorksIndex'
import CategoryPage from './pages/Works/CategoryPage'
import Imprint from './components/Imprint'
import GDPR from './components/GDPR'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar ganz oben, volle Breite */}
      <Navbar />

      {/* Hauptinhalt zentriert mit max-width */}
      <main className="flex-1 mx-auto w-full px-4 py-12">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dienstleistungen" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/arbeiten" element={<WorksIndex />} />
          <Route path="/arbeiten/:categoryId" element={<CategoryPage />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<GDPR />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 w-full text-gray-300">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <span>© {new Date().getFullYear()} Ute O'Grady</span>
          <NavLink to="/impressum" className="underline hover:text-white">Impressum</NavLink>
          <NavLink to="/datenschutz" className="underline hover:text-white">Privacy Policy</NavLink>
        </div>
      </footer>
    </div>
  )
}