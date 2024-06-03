import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomLink: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link
        to={location.pathname === '/home-page' ? '/home-page' : '/not-found'}
        className="text-blue-500 underline"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default CustomLink;
