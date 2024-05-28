import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar' >
            <Link to="/table">table</Link>
            <Link to={"/"}>Board</Link>
            <Link to={"/draft"}>Draft</Link>
        </div>
    );
};

export default Navbar;