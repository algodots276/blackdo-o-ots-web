import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faDiscord,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

    render() {
        return <footer className="text-center text-lg-start">

            <div className="container d-flex justify-content-center py-5">
                <a className="nav-link link show text-primary display-4"
                   href="https://twitter.com/algodots276" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a className="nav-link link text-primary display-4"
                   href="https://discord.gg/fqaUaJBE" aria-expanded="false"
                   target="_blank">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
                <a className="nav-link link text-primary display-4"
                   href="https://instagram.com/algodots276" aria-expanded="false"
                   target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a className="nav-link link text-primary display-4"
                   href="https://t.me/algodots276" aria-expanded="false"
                   target="_blank">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
            </div>

        </footer>;
    }
}

export default Footer;