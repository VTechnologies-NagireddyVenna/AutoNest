import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 car-card">
        <img
          src={car.imageUrl || 'https://via.placeholder.com/400x250?text=No+Image'}
          className="card-img-top"
          alt={`${car.brand} ${car.model}`}
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{car.brand} {car.model}</h5>
          <p className="card-text text-muted mb-1">{car.year} • {car.fuelType} • {car.transmission}</p>
          <p className="card-text text-muted mb-2">{car.kilometersDriven} km • {car.location}</p>
          <h5 className="text-warning fw-bold mb-3">₹ {Number(car.price).toLocaleString('en-IN')}</h5>
          <Link to={`/cars/${car.id}`} className="btn btn-dark w-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
