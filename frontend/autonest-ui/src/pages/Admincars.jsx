import { useEffect, useState } from 'react';
import api from '../services/api';

const initialForm = {
  brand: '',
  model: '',
  year: '',
  fuelType: 'PETROL',
  transmission: 'MANUAL',
  price: '',
  kilometersDriven: '',
  ownerType: 'FIRST_OWNER',
  location: '',
  imageUrl: '',
  description: '',
  status: 'AVAILABLE'
};

function AdminCars() {
  const [cars, setCars] = useState([]);
  const [formData, setFormData] = useState(initialForm);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/cars', {
        ...formData,
        year: Number(formData.year),
        price: Number(formData.price),
        kilometersDriven: Number(formData.kilometersDriven)
      });

      setFormData(initialForm);
      fetchCars();
      alert('Car added successfully!');
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Failed to add car.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;

    try {
      await api.delete(`/cars/${id}`);
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="fw-bold mb-4">Add New Car</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3"><input className="form-control" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required /></div>
                <div className="mb-3"><input className="form-control" name="model" placeholder="Model" value={formData.model} onChange={handleChange} required /></div>
                <div className="mb-3"><input className="form-control" type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required /></div>

                <div className="mb-3">
                  <select className="form-select" name="fuelType" value={formData.fuelType} onChange={handleChange}>
                    <option>PETROL</option>
                    <option>DIESEL</option>
                    <option>CNG</option>
                    <option>ELECTRIC</option>
                    <option>HYBRID</option>
                  </select>
                </div>

                <div className="mb-3">
                  <select className="form-select" name="transmission" value={formData.transmission} onChange={handleChange}>
                    <option>MANUAL</option>
                    <option>AUTOMATIC</option>
                  </select>
                </div>

                <div className="mb-3"><input className="form-control" type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required /></div>
                <div className="mb-3"><input className="form-control" type="number" name="kilometersDriven" placeholder="Kilometers Driven" value={formData.kilometersDriven} onChange={handleChange} required /></div>

                <div className="mb-3">
                  <select className="form-select" name="ownerType" value={formData.ownerType} onChange={handleChange}>
                    <option>FIRST_OWNER</option>
                    <option>SECOND_OWNER</option>
                    <option>THIRD_OWNER</option>
                    <option>FOURTH_OWNER</option>
                  </select>
                </div>

                <div className="mb-3"><input className="form-control" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required /></div>
                <div className="mb-3"><input className="form-control" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} /></div>
                <div className="mb-3"><textarea className="form-control" rows="3" name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea></div>

                <div className="mb-3">
                  <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
                    <option>AVAILABLE</option>
                    <option>SOLD</option>
                    <option>RESERVED</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-semibold">
                  Add Car
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="fw-bold mb-4">Manage Cars</h3>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Car</th>
                      <th>Price</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cars.map((car) => (
                      <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.brand} {car.model}</td>
                        <td>₹ {Number(car.price).toLocaleString('en-IN')}</td>
                        <td>{car.location}</td>
                        <td>{car.status}</td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(car.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {cars.length === 0 && <p className="text-center text-muted">No cars found.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminCars;
