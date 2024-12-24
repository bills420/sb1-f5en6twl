import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Footer from './components/footer/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import About from './pages/About';
import Investors from './pages/Investors';
import Shop from './pages/Shop';
import Labour from './pages/Labour';
import Beautification from './pages/Beautification';
import WebDevelopment from './pages/WebDevelopment';
import Music from './pages/Music';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Auth from './pages/auth/Auth';
import Cart from './pages/cart/Cart';

// Product Pages
import LabourProducts from './pages/products/LabourProducts';
import MusicProducts from './pages/products/MusicProducts';
import BeautificationProducts from './pages/products/BeautificationProducts';
import WebProducts from './pages/products/WebProducts';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import Copyright from './pages/legal/Copyright';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Services /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/labour" element={<Labour />} />
            <Route path="/beautification" element={<Beautification />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/music" element={<Music />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cart" element={<Cart />} />
            
            {/* Product Routes */}
            <Route path="/products/labour" element={<LabourProducts />} />
            <Route path="/products/music" element={<MusicProducts />} />
            <Route path="/products/beautification" element={<BeautificationProducts />} />
            <Route path="/products/web" element={<WebProducts />} />

            {/* Legal Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/copyright" element={<Copyright />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;