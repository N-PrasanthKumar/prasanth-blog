import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          
          <h1 className="text-2xl font-bold">
            ProBlog
          </h1>

          {/* Navigation Buttons */}
          <nav className="flex items-center gap-4">
            <Link to="/" className="btn btn-secondary ">
              Home
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn btn-secondary ">
                  Dashboard
                </Link>
                <Link to="/posts/create" className="btn btn-secondary ">
                  Create Post
                </Link>
                <button
                  onClick={logout}
                  className="btn btn-secondary btn-normalized"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary ">
                  Login
                </Link>
                <Link to="/register" className="btn btn-secondary ">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
