import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/admin" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-700 text-white font-bold px-3 py-2 rounded"
                : "text-white px-3 py-2"
            }
          >
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/account" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-700 text-white font-bold px-3 py-2 rounded"
                : "text-white px-3 py-2"
            }
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/product2" 
            className={({ isActive }) => 
              isActive 
                ? "bg-blue-700 text-white font-bold px-3 py-2 rounded"
                : "text-white px-3 py-2"
            }
          >
            Product2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header2;
