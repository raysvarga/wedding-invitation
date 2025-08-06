import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';
import Location from './pages/Location';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import { useEffect, useState } from 'react';

function AppWrapper() {
  const location = useLocation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const untuk = params.get('untuk');
    if (untuk) {
      setQuery(`?untuk=${encodeURIComponent(untuk)}`);
    }
  }, [location.search]);

  return (
    <>
      <Navbar query={query} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
      <AudioPlayer /> 
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
