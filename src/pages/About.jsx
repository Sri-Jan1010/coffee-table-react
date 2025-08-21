export default function About(){
  return (
    <section className="container-max py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h1 className="text-3xl font-bold mb-3">Our Mission</h1>
          <p className="text-stone-700">To provide a safe, welcoming space where anyone can come and share a cup of coffee, feel comfortable to talk openly about what they are going through, and connect with others for support and friendship.</p>
          <p className="mt-3 text-stone-700">We are volunteer-led and operate across multiple community centres. Everyone is welcome—no bookings required.</p>
        </div>
        <div className="space-y-6">
          <img src="/assets/Screenshot 2025-08-21 121105.png" className="rounded-2xl shadow" alt="Mission post" />
          <img src="/assets/Screenshot 2025-08-21 121126.png" className="rounded-2xl shadow" alt="Kitchen story" />
          <img src="/assets/Screenshot 2025-08-21 121310.png" className="rounded-2xl shadow" alt="Art class post" />
        </div>
      </div>
    </section>
  )
}
