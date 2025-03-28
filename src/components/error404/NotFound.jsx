import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p className="text-muted">
                The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary mt-3">
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;