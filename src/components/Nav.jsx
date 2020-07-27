import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <a className="navbar-brand" href="#a"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png" style={{ width: "4vw" }} alt="" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                  </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#a">Action</a>
                                <a className="dropdown-item" href="#a">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#a">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 " style={{}} type="search" placeholder="Search" aria-label="Search" />

                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">IMDbPro <span className="sr-only">(current)</span></a>
                        </li>
                        <li>|</li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Watchlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Sign In</a>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }
}
