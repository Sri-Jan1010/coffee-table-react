import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Activities from './pages/Activities.jsx'
import Events from './pages/Events.jsx'
import FoodDrive from './pages/FoodDrive.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import JoinUs from './pages/JoinUs.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/food-drive" element={<FoodDrive />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
