export default function Footer(){
  return (
    <footer className="bg-stone-100 border-t">
      <div className="container-max py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-bold mb-2">Thee Coffee Table</div>
          <p className="text-stone-600">Community meetups across Wyndham & surrounds. Everyone is welcome.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Get involved</div>
          <ul className="space-y-1 text-stone-700">
            <li>Weekly Activities</li>
            <li>Food Drive</li>
            <li>Community Kitchen</li>
            <li>Volunteer & Donate</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-stone-700">Coordinator: Sally Napolioni — 0433 663 271</p>
          <p className="text-stone-700">Email: hello@theecoffeetable.org (placeholder)</p>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 pb-8">© {new Date().getFullYear()} Thee Coffee Table</div>
    </footer>
  )
}
