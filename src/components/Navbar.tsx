import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Über mich' },
  { to: '/dienstleistungen', label: 'Dienstleistungen' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/arbeiten', label: 'Arbeiten' },
]

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-medium">Ute O'Grady</div>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}