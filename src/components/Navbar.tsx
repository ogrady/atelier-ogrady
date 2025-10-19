import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // icons

const links = [
  { to: '/', label: 'Über mich', color: 'border-red-500' },
  { to: '/dienstleistungen', label: 'Dienstleistungen', color: 'border-yellow-500' },
  { to: '/kontakt', label: 'Kontakt', color: 'border-green-500' },
  { to: '/arbeiten', label: 'Arbeiten', color: 'border-blue-500' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-800 w-full">
      <nav className="w-full flex items-center justify-between px-8 py-4">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-xl font-medium text-white">
          Ute O&apos;Grady
        </NavLink>

        {/* Desktop-Nav */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {links.map((l) => (
            <li key={l.to} className="pb-1">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? `text-white hover:text-gray-300 font-semibold border-b-2 ${l.color}`
                    : `text-gray-300 hover:text-white border-b-2 ${l.color}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile-Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile-Menü */}
      {open && (
        <div className="md:hidden bg-gray-700 px-8 py-4 space-y-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? `block text-white font-semibold border-b-2 ${l.color}`
                  : `block text-gray-300 hover:text-white border-b-2 ${l.color}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
