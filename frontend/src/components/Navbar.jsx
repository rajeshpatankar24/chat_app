import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Chat App</Link>
            <div className="navbar-end">
                <Link to='/signup' className="btn btn-primary mx-2">Sign Up</Link>
                <Link to='/login' className="btn btn-secondary mx-2">Log In</Link>
                <Link to='/logout' className="btn btn-accent mx-2">Log Out</Link>
                <Link to='/setting' className="btn btn-info mx-2">Settings</Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
