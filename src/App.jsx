import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';
import Location from './pages/Location';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

