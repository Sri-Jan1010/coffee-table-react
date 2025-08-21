import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container-max py-14 grid md:grid-cols-3 gap-6">
        {[
          {title: 'Weekly Activities', desc: 'Find a meetup near you every week.', to:'/activities', img:'/assets/505911529_4111359359075924_6638831691391126671_n.jpg'},
          {title: 'Food Drive', desc: 'Donate non‑perishables & fresh veggies.', to:'/food-drive', img:'/assets/512686244_4125883414290185_2006208516723552519_n.jpg'},
          {title: 'Menu', desc: 'What’s cooking at the Community Kitchen.', to:'/menu', img:'/assets/514313832_4130357253842801_7232963982314721599_n.jpg'},
        ].map((c)=>(
          <Link key={c.title} to={c.to} className="card group">
            <img src={c.img} alt="" className="h-40 w-full object-cover rounded-xl mb-4 group-hover:opacity-95"/>
            <div className="font-bold text-lg">{c.title}</div>
            <p className="text-stone-600">{c.desc}</p>
            <span className="badge mt-3">Learn more</span>
          </Link>
        ))}
      </section>

      <section className="container-max pb-16">
        <div className="card">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img src="/assets/about.png" alt="About" className="rounded-xl"/>
            <div>
              <h2 className="text-2xl font-bold">About Thee Coffee Table</h2>
              <p className="mt-2 text-stone-700">A welcoming community space to share a cuppa, connect and find support. We host weekly gatherings, a community kitchen, and volunteering opportunities across local community centres.</p>
              <Link to="/about" className="btn-outline mt-4 inline-flex">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
