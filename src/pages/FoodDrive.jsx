export default function FoodDrive(){
  return (
    <section className="container-max py-12 grid md:grid-cols-2 gap-8 items-start">
      <img src="/assets/512686244_4125883414290185_2006208516723552519_n.jpg" className="rounded-2xl shadow" alt="Food Drive" />
      <div className="card">
        <h1 className="text-3xl font-bold">Food Drive — For Families in Need</h1>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-stone-700">
          <li>Donate daily: non‑perishable items & fresh vegetables.</li>
          <li>Drop‑off location: Community Kitchen @ Manor Lakes Community Centre.</li>
          <li>Collection Day: every second Wednesday.</li>
        </ul>
        <div className="mt-4">More info: <strong>Sally Napolioni — 0433 663 271</strong></div>
      </div>
    </section>
  )
}
