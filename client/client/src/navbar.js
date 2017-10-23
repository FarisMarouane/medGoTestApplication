import React from 'react';
import {
  Link
} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <span className='navbar-brand' href=''>
              <Link to='/'>medGO</Link>
            </span>
          </div>
          <ul className='nav navbar-nav'>
            <li><Link to='/admin'>Admin</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
