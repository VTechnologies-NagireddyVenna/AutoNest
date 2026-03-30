import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CarListing from './pages/CarListing';
import CarDetails from './pages/CarDetails';
import Contact from './pages/Contact';
import AdminCars from './pages/AdminCars';
import AdminEnquiries from './pages/AdminEnquiries';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarListing />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/cars" element={<AdminCars />} />
          <Route path="/admin/enquiries" element={<AdminEnquiries />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
