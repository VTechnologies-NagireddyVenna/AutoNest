import { useEffect, useState } from 'react';
import CarCard from '../components/common/CarCard';
import SearchFilter from '../components/common/SearchFilter';
import api from '../services/api';

function CarListing() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const filteredCars = cars.filter((car) =>
    `${car.brand} ${car.model} ${car.location}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Available Cars</h2>
          <p className="text-muted">Find the right car for your needs</p>
        </div>

        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="row">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="text-center">No cars found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CarListing;
