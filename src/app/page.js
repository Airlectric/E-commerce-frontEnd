import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-light text-center py-5 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Welcome to Our Platform</h1>
              <p className="lead">
                Your one-stop solution whether you're a Shop Owner or a Customer.
              </p>
              <div className="mt-4">
                <Link href="/login">
                  <button className="btn btn-primary btn-lg mx-2">Login</button>
                </Link>
                <Link href="/register">
                  <button className="btn btn-secondary btn-lg mx-2">Register</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://lh3.googleusercontent.com/uZyFmxsV_Qwc2k-CNE4-5Ts-uJ0sT3jWkyIDNHRAfpIKcSi_n-gLusHC2gDR46TCjaPorMl3j8gzQ4MStPOFSM9P1JQlih5vamA=w904-h509-rw"
                alt="Hero"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Easy to Use</h5>
                <p className="card-text">
                  Simplified interface for both Shop Owners and Customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Secure</h5>
                <p className="card-text">
                  Your data is protected with state-of-the-art security measures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">
                  Our team is here to assist you anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}