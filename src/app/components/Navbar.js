import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand">OurPlatform</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/login">
                <span className="nav-link">Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <span className="nav-link">Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
