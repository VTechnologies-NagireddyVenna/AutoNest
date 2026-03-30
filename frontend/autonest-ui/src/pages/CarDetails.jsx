import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    phone: '',
    message: '',
    carId: Number(id)
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchCar();
  }, [id]);

  const fetchCar = async () => {
    try {
      const response = await api.get(`/cars/${id}`);
      setCar(response.data);
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/enquiries', formData);
      setSuccessMessage('Enquiry submitted successfully!');
      setFormData({
        userName: '',
        userEmail: '',
        phone: '',
        message: '',
        carId: Number(id)
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  if (!car) {
    return <div className="container py-5 text-center">Loading car details...</div>;
  }

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7">
            <img
              src={car.imageUrl || 'https://via.placeholder.com/800x500?text=No+Image'}
              alt={`${car.brand} ${car.model}`}
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-lg-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="fw-bold mb-3">{car.brand} {car.model}</h2>
              <h3 className="text-warning fw-bold mb-3">₹ {Number(car.price).toLocaleString('en-IN')}</h3>

              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><strong>Year:</strong> {car.year}</li>
                <li className="list-group-item"><strong>Fuel:</strong> {car.fuelType}</li>
                <li className="list-group-item"><strong>Transmission:</strong> {car.transmission}</li>
                <li className="list-group-item"><strong>KMs Driven:</strong> {car.kilometersDriven}</li>
                <li className="list-group-item"><strong>Owner:</strong> {car.ownerType}</li>
                <li className="list-group-item"><strong>Location:</strong> {car.location}</li>
                <li className="list-group-item"><strong>Status:</strong> {car.status}</li>
              </ul>

              <p className="text-muted">{car.description}</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="fw-bold mb-4">Send Enquiry</h3>

              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="userName" placeholder="Your Name" value={formData.userName} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <input type="email" className="form-control" name="userEmail" placeholder="Your Email" value={formData.userEmail} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <textarea className="form-control" rows="4" name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-semibold">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
