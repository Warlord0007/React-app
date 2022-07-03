import React, { Component } from 'react';

const NavBar = props => {
    console.log("Navbar - Rendered");
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
                </a>
        </div>
    </nav>
    );
};

export default NavBar;