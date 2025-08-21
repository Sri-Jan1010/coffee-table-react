import { weeklyMenu } from '../data/menu.js'

export default function Menu(){
  return (
    <section className="container-max py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src="/assets/514313832_4130357253842801_7232963982314721599_n.jpg" className="rounded-2xl shadow" alt="Weekly menu poster" />
        <div className="card">
          <h1 className="text-3xl font-bold">Community Kitchen Menu</h1>
          <p className="text-stone-700 mt-2">Available at Manor Lakes Community Kitchen. Pickup and table service options available.</p>
          <div className="mt-5 space-y-4">
            {weeklyMenu.map((d)=>(
              <div key={d.day}>
                <div className="font-semibold text-brand-brown">{d.day}</div>
                <ul className="list-disc pl-5 text-stone-700">
                  {d.specials.map((s,i)=>(<li key={i}>{s}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
