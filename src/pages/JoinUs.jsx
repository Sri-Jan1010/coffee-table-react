export default function JoinUs(){
  return (
    <section className="container-max py-12 grid md:grid-cols-2 gap-8 items-start">
      <div className="card">
        <h1 className="text-3xl font-bold">Volunteer with us</h1>
        <p className="mt-2 text-stone-700">From kitchen support to event setup, there’s a way for everyone to help. Fill the form and we’ll be in touch.</p>
        <ul className="list-disc pl-6 mt-3 text-stone-700 space-y-1">
          <li>Community Kitchen & Food Bank</li>
          <li>Meetup Hosts & Welcomers</li>
          <li>Logistics & Donations</li>
          <li>Storytelling & Media</li>
        </ul>
      </div>
      <form className="card space-y-3" onSubmit={(e)=> e.preventDefault()}>
        <h2 className="text-xl font-bold">Volunteer form</h2>
        <input placeholder="Full name" className="w-full border rounded-lg px-3 py-2"/>
        <input placeholder="Email or Phone" className="w-full border rounded-lg px-3 py-2"/>
        <select className="w-full border rounded-lg px-3 py-2">
          <option>Choose an area</option>
          <option>Community Kitchen</option>
          <option>Food Bank</option>
          <option>Weekly Activities</option>
          <option>Media & Stories</option>
        </select>
        <textarea placeholder="Tell us a bit about you" rows="5" className="w-full border rounded-lg px-3 py-2"></textarea>
        <button className="btn-primary w-full">Submit</button>
        <p className="text-xs text-stone-500">*Hook this form to Formspree or Google Forms to collect responses.</p>
      </form>
    </section>
  )
}
