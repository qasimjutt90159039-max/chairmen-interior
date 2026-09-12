import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PvcPanels from './pages/PvcPanels';
import Wallpapers from './pages/Wallpapers';
import InteriorDesign from './pages/InteriorDesign';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-luxury-black">
      <span className="text-xs font-mono tracking-luxury text-luxury-bronze uppercase mb-3">
        [Error 404]
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium">
        Page Not Found
      </h1>
      <p className="mt-4 text-stone-400 text-sm max-w-md font-light">
        The architectural page or reference you requested does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-luxury bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pvc-panels" element={<PvcPanels />} />
        <Route path="wallpapers" element={<Wallpapers />} />
        <Route path="interior-design" element={<InteriorDesign />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
