import { events } from '../data/events.js'

export default function Events(){
  return (
    <section className="container-max py-12">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i)=>(
          <article key={i} className="card">
            <img src={e.image} alt={e.title} className="rounded-xl w-full h-56 object-cover mb-4"/>
            <h2 className="text-xl font-bold">{e.title}</h2>
            <p className="text-stone-700 mt-1">{e.description}</p>
            <div className="mt-3 text-stone-800"><strong>When:</strong> {e.when}</div>
            <div className="text-stone-800"><strong>Where:</strong> {e.where}</div>
            <div className="mt-2 space-y-1">
              {e.contacts.map((c, idx)=>(<div key={idx} className="text-stone-700">{c}</div>))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
