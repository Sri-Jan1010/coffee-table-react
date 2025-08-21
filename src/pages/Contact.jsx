export default function Contact(){
  return (
    <section className="container-max py-12 grid md:grid-cols-2 gap-8">
      <div className="card">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-stone-700">Have a question or want to get involved? Reach out anytime.</p>
        <div className="mt-4 space-y-2 text-stone-800">
          <div><strong>Coordinator:</strong> Sally Napolioni — 0433 663 271</div>
          <div><strong>Email:</strong> hello@theecoffeetable.org (placeholder)</div>
          <div><strong>Facebook:</strong> search “Thee Coffee Table”</div>
        </div>
      </div>
      <form className="card space-y-3" onSubmit={(e)=> e.preventDefault()}>
        <h2 className="text-xl font-bold">Send a message</h2>
        <input placeholder="Your name" className="w-full border rounded-lg px-3 py-2"/>
        <input placeholder="Your email or phone" className="w-full border rounded-lg px-3 py-2"/>
        <textarea placeholder="How can we help?" rows="5" className="w-full border rounded-lg px-3 py-2"></textarea>
        <button className="btn-primary w-full">Send</button>
        <p className="text-xs text-stone-500">*This demo form doesn’t send email. Connect Formspree/EmailJS or a Next.js API route for production.</p>
      </form>
    </section>
  )
}
