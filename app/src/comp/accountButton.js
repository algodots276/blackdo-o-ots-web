import React, {useState, useLayoutEffect} from "react";
import {useCopyToClipboard} from 'usehooks-ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faCheck} from '@fortawesome/free-solid-svg-icons'

import {useWallet} from '@txnlab/use-wallet'
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AccountButton() {

    const [value, copy] = useCopyToClipboard()
    const [copyIcon, setCopyIcon] = useState(faCopy);

    const [dotsAsset, setDotsAsset] = useState(undefined);
    const [algoAsset, setAlgoAsset] = useState(undefined);
    const [nfdData, setNfdData] = useState(undefined);

    const {providers, activeAccount, getAssets, isReady} = useWallet();

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    function handleConnect(e, provider) {
        provider.connect();
    }

    function handleCopyClick(e) {
        copy(activeAccount.address);
        setCopyIcon(faCheck);
    }

    function handleDisconnect(e) {
        getProviderById(activeAccount.providerId).disconnect();
    }

    function formatDots(dotsAmount) {
        return Math.floor(dotsAmount / 10000000).toLocaleString(undefined, {maximumFractionDigits: 2});
    }

    function formatAlgos(algoAmount) {
        return (Math.floor(algoAmount / 10000) / 100).toLocaleString(undefined, {maximumFractionDigits: 2});
    }

    function getProviderById(providerId) {
        if (!providers) {
            return undefined;
        }
        return providers.filter(p => p.metadata.id == providerId)[0];
    }

    function trimAlgoBalance(balance) {
        return ("" + balance).substring(0, 4);
    }

    function trimAccount(accountAddress, numbers) {
        return accountAddress.substring(0, numbers) + "..." + accountAddress.substring(accountAddress.length - numbers, accountAddress.length);
    }

    useLayoutEffect(() => {
        if (activeAccount) {
            axios.get('https://api.nf.domains/nfd/lookup?address=' + activeAccount.address)
                .then(response => {
                    setNfdData(response.data[activeAccount.address]);
                })
                .catch(error => {
                    // Nothing here
                });
            getAssets().then(assets => {
                const dots = assets.filter(a => a['asset-id'] == 745410378);
                setDotsAsset(dots[0]);
                const algo = assets.filter(a => a['asset-id'] == 287867876);
                setAlgoAsset(algo[0]);
            }).catch(error => {
                // Nothing here
                console.log(error);
            });
        }

    }, [activeAccount]);

    if (!isReady) {
        return null;
    }
    if (activeAccount && getProviderById(activeAccount.providerId)) {
        return (
            <div>
                <a className="nav-link link text-primary" onClick={handleModalShow}>
                    <div className="row border-dark border border-1"
                         style={{backgroundColor: "white", borderRadius: "5px", padding: "5px 5px"}}>
                        <div className="col-md-12 align-left text-nowrap small" style={{margin: "0 auto"}}>
                            {trimAccount(activeAccount.address, 6)} {algoAsset ? "| " + formatAlgos(algoAsset.amount) + " algo" : null}
                        </div>
                    </div>
                </a>
                <Modal show={modalShow} onHide={handleModalClose} size="md"
                       aria-labelledby="example-modal-sizes-title-sm">

                    <Modal.Body>
                        <div className="row" style={{cursor: "pointer"}}>
                            <div className="col-lg-7">
                                <h5>{nfdData ? nfdData.name : null}</h5>
                                {activeAccount ? trimAccount(activeAccount.address, 10) : null} &nbsp;
                                <FontAwesomeIcon onClick={(e) => handleCopyClick(e)}  icon={copyIcon}/>
                            </div>
                            <div className="col-lg-5 align-right">
                                {algoAsset ? formatAlgos(algoAsset.amount) : "0"} algo
                                <br/>
                                {dotsAsset ? formatDots(dotsAsset.amount) : "0"} dots
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-2 text-lg-start">
                                <img
                                    width={45}
                                    height={45}
                                    src={getProviderById(activeAccount.providerId).metadata.icon}
                                />
                            </div>
                            <div className="col-lg-2 text-lg-start my-auto">
                                <h5>{getProviderById(activeAccount.providerId).metadata.name}</h5>
                            </div>
                            <div className="col-lg-8 align-right">
                                <button type="button" onClick={(e) => handleDisconnect(e)}>
                                    Disconnect
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>)
    }
}