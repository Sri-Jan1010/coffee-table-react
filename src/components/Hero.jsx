import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-brand-orange/10 via-white to-brand-teal/10">
      <div className="container-max py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-charcoal">Your safe community space to <span className="text-brand-orange">share</span>, <span className="text-brand-teal">inspire</span> and be inspired.</h1>
          <p className="mt-4 text-lg text-stone-700">Join weekly gatherings across community centres for connection, conversation and support. Grab a cuppa, make friends, and get involved.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/activities" className="btn-primary">See Weekly Activities</Link>
            <Link to="/join-us" className="btn-outline">Volunteer</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/assets/425996559_3695123120699552_3591417898551098659_n.jpg" className="w-full max-w-md rounded-2xl shadow" alt="Coffee Table hero" />
        </div>
      </div>
    </section>
  )
}
