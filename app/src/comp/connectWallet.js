import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

import {useWallet} from '@txnlab/use-wallet'

export default function ConnectWallet() {

    const {providers, isReady} = useWallet();

    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    function handleConnect(e, provider) {
        provider.connect();
    }

    if (!isReady) {
        return null;
    }

    return (<div>
        <a onClick={handleModalShow}>
            <div className="text-nowrap small">
                <svg fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12h2v4h-2z"></path>
                    <path
                        d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
                </svg>
                &nbsp;Connect wallet
            </div>
        </a>
        <Modal show={modalShow} onHide={handleModalClose} size="md"
               aria-labelledby="example-modal-sizes-title-sm">

            <Modal.Body>
                <p>Find more information about how to setup your wallet <a href="#">Here</a>.</p>
                {providers?.map((provider) => (
                    <div key={provider.metadata.id} className="dropdown-item text-primary display-4">
                        <div className="row">
                            <div className="col-2 align-right btn-group-vertical">
                                <img width={40}
                                     height={40}
                                     alt={`${provider.metadata.name} icon`}
                                     src={provider.metadata.icon}/>
                            </div>
                            <div className="col-3 align-left btn-group-vertical">
                                <h5>{provider.metadata.name}</h5>
                            </div>
                            <div className="col-7 align-right">
                                <Button variant="primary sm" size="sm" onClick={(e) => handleConnect(e, provider)}>
                                    Connect
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>)
}