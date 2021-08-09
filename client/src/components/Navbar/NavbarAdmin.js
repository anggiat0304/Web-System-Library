import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import './Navbar.css';
 function NavbarAdmin() {
    return (
        <div className="Navbar">
            <div>
                   <h1 className="title">Perpustakaan</h1>
            </div>
            <div className="menu">
            <Route>
            <Link to="/"><p className="menu-items">Masuk sebagai anggota</p></Link>
            </Route>
            </div>
        </div>
    )
}
export default NavbarAdmin;