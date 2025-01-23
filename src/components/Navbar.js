import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../ContextApi/ContextAuth'

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)

      const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="">My Photo Gallery</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/review">Feedback</Link>
                            </li>

                        </ul>
                        <div className="dropdown d-flex">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Photo Category                                </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/space">Space</Link></li>
                                <li><Link className="dropdown-item" to="/nature">Nature</Link></li>
                                <li><Link className="dropdown-item" to="/tech">Technology</Link></li>
                            </ul>
                        </div>
                        <ul className="nav-item">
                         {
                            user? <Link className="nav-link active" aria-current="page" onClick={handleLogOut} >Logout</Link> : <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                         }
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
