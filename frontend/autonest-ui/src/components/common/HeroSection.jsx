import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center text-white">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">Find Your Perfect Second-Hand Car</h1>
        <p className="lead mb-4">
          Trusted used cars with transparent pricing and verified details.
        </p>
        <Link to="/cars" className="btn btn-warning btn-lg px-4 fw-semibold">
          Explore Cars
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
