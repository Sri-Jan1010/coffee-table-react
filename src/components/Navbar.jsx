import { Link, NavLink } from 'react-router-dom'

const nav = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/activities', label: 'Weekly Activities'},
  {to: '/food-drive', label: 'Food Drive'},
  {to: '/menu', label: 'Menu'},
  {to: '/events', label: 'Events'},
  {to: '/contact', label: 'Contact'},
  {to: '/join-us', label: 'Volunteer'},
]

export default function Navbar(){
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="container-max flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/assets_task_01k356fgnhfm488q4gr3y8sr5j_1755742572_img_1.webp" alt="Coffee Table logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-bold text-lg tracking-tight">Thee Coffee Table</div>
            <div className="text-xs text-stone-500">Share • Inspire • Be inspired</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-5">
          {nav.map((n)=> (
            <NavLink key={n.to} to={n.to}
              className={({isActive}) => `text-sm font-medium ${isActive ? 'text-brand-brown' : 'text-stone-700 hover:text-brand-brown'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/join-us" className="btn-primary hidden md:inline-flex">Join Us</Link>
      </div>
    </header>
  )
}
