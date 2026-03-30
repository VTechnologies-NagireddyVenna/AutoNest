import { useEffect, useState } from 'react';
import api from '../services/api';

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await api.get('/enquiries');
      setEnquiries(response.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="fw-bold mb-4">Customer Enquiries</h3>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Car</th>
                  <th>Message</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id}>
                    <td>{enquiry.id}</td>
                    <td>{enquiry.userName}</td>
                    <td>{enquiry.userEmail}</td>
                    <td>{enquiry.phone}</td>
                    <td>{enquiry.carName}</td>
                    <td>{enquiry.message}</td>
                    <td>{new Date(enquiry.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {enquiries.length === 0 && <p className="text-center text-muted">No enquiries found.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminEnquiries;
