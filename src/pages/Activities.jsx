import { meetings, activities } from '../data/schedule.js'

export default function Activities(){
  return (
    <section className="container-max py-12 space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Weekly Activities</h1>
        <p className="text-stone-700 mt-2">Join us at any of the locations below. Times may change for public holidays—check our Facebook for updates.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {meetings.map((m, i) => (
          <div key={i} className="card">
            <div className="text-sm text-stone-500">{m.day}</div>
            <div className="font-bold text-lg">{m.place}</div>
            <div className="text-stone-700">{m.time}</div>
            <div className="text-stone-600">{m.address}</div>
            <div className="mt-1 text-stone-700">{m.contact}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Ongoing Programs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((a, i)=>(
            <div key={i} className="card">
              <div className="font-bold">{a.name}</div>
              <div className="text-stone-700">{a.time}</div>
              <div className="text-stone-700">{a.contact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
