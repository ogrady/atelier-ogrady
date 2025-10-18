import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Über mich', color: 'border-red-500' },
  { to: '/dienstleistungen', label: 'Dienstleistungen', color: 'border-yellow-500' },
  { to: '/kontakt', label: 'Kontakt', color: 'border-green-500' },
  { to: '/arbeiten', label: 'Arbeiten', color: 'border-blue-500' },
]

export default function Navbar() {
  return (
    <header className="bg-gray-800 w-full">
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <NavLink to="/" className="text-xl font-medium text-white">Ute O'Grady</NavLink>
        <ul className="flex space-x-6 font-semibold">
          {links.map((l) => (
            <li key={l.to} className="pb-1">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? `text-white font-semibold border-b-2 ${l.color}`
                    : `text-gray-300 hover:text-white border-b-2 ${l.color}`
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