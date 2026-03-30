function Contact() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">We’re here to help you find your perfect car</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white p-5 rounded shadow-sm">
              <h4 className="fw-bold mb-3">AutoNest Support</h4>
              <p><strong>Email:</strong> support@autonest.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Location:</strong> Vijayawada, Andhra Pradesh</p>
              <p className="text-muted mt-3">
                Reach out to us for buying, selling, or enquiry-related assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
