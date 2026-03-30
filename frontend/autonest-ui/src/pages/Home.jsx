import { useEffect, useState } from 'react';
import HeroSection from '../components/common/HeroSection';
import CarCard from '../components/common/CarCard';
import api from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await api.get('/cars');
      setCars(response.data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
    <>
      <HeroSection />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Featured Cars</h2>
            <p className="text-muted">Browse our latest verified used cars</p>
          </div>

          <div className="row">
            {cars.length > 0 ? (
              cars.map((car) => <CarCard key={car.id} car={car} />)
            ) : (
              <p className="text-center">No cars available.</p>
            )}
          </div>

          <div className="text-center mt-4">
            <Link to="/cars" className="btn btn-warning btn-lg px-4 fw-semibold">
              View All Cars
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
