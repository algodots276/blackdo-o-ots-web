import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return <section className="menu cid-s48OLK6784">
            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container">
                    <Link  underline="none" style={{ textDecoration: 'none' }} className="display-7" href="#">⬤━⬤━⬤</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
                            data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li className="nav-item">
                                <a className="nav-link link show text-primary display-4"
                                   href="roadmap">
                                    <span className="text-primary"></span>Roadmap</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link dropdown-toggle text-primary display-4"
                                   data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" aria-expanded="false">NFTs<br/></a>
                                <div className="dropdown-menu" aria-labelledby="dropdown-558" data-bs-popper="none">
                                    <a className="dropdown-item text-primary display-4"
                                       href="https://www.nftexplorer.app/collection/algodots" target="_blank">276</a>
                                    <a className="show dropdown-item text-primary display-4"
                                       href="https://www.nftexplorer.app/collection/dogs-of-true-sight" target="_blank">Dogs
                                        Of True Sight</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link link dropdown-toggle text-primary display-4"
                                   data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
                                   data-bs-auto-close="outside" aria-expanded="false">Token</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown-237" data-bs-popper="none">
                                    <a className="dropdown-item text-primary display-4"
                                       href="https://vestige.fi/asset/745410378"
                                       target="_blank">Chart</a>
                                    <a className="dropdown-item text-primary display-4"
                                       href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=745410378"
                                       target="_blank">Buy</a>
                                    <a className="text-primary dropdown-item display-4"
                                       href="whitepaper">Whitepaper</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-black"
                                   href="https://app.blackdo-o-ots.com" target="_blank">
                                    <span className="text-primary"></span>Launch app</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>;
    }
}

export default Navbar;