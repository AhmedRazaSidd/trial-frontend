import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <>
            <div className='col-lg-10'>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">CMS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/addcompany' className='btn btn-light btn-sm text-dark'>Add Company</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addmanager' className='btn btn-light btn-sm text-dark'>Add Manager</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addemploye' className='btn btn-light btn-sm text-dark'>Add Employe</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header