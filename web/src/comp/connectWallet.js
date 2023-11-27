import React, {useState, useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useCopyToClipboard} from 'usehooks-ts';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faCheck} from '@fortawesome/free-solid-svg-icons'

import {useWallet} from '@txnlab/use-wallet'
import axios from 'axios';

export default function ConnectWallet() {

    const navigate = useNavigate();
    const [value, copy] = useCopyToClipboard()
    const [copyIcon, setCopyIcon] = useState(faCopy);

    const [dotsAsset, setDotsAsset] = useState(undefined);
    const [algoAsset, setAlgoAsset] = useState(undefined);
    const [nfdData, setNfdData] = useState(undefined);

    const {providers, activeAccount, getAssets, isReady} = useWallet();

    function handleConnect(e, provider) {
        provider.connect().then(yes => navigate("/"));
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("show");
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
        return Math.floor(algoAmount / 1000000).toLocaleString(undefined, {maximumFractionDigits: 2});
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

    function trimAccount(accountAddress) {
        return accountAddress.substring(0, 6) + "..." + accountAddress.substring(accountAddress.length - 6, accountAddress.length);
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
        return <div style={{width: "400px"}}></div>;
    } else if (activeAccount && getProviderById(activeAccount.providerId)) {
        return (<div>
            <a className="nav-link link text-primary display-4"
               data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
               data-bs-auto-close="outside" aria-expanded="false">
                <div className="row border-dark border border-1 "
                     style={{backgroundColor: "white", borderRadius: "5px", padding: "5px 5px"}}>
                    <div className="col-md-3 align-right">
                        <img
                            width={25}
                            height={25}
                            src={getProviderById(activeAccount.providerId).metadata.icon}
                        />
                    </div>
                    <div className="col-md-9 align-left flex-nowrap small">
                        {nfdData ? nfdData.name : isReady ? trimAccount(activeAccount.address) : null}
                    </div>
                </div>
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdown-237" data-bs-popper="none">
                <div className="row align-center text-success">
                    <div className="col-lg-12">
                        {algoAsset ? formatAlgos(algoAsset.amount) : "0"} algo
                        <br/>
                        {dotsAsset ? formatDots(dotsAsset.amount) : "0"} dots
                    </div>
                </div>
                <div className="dropdown-item text-primary display-4">
                    <div className="row" onClick={(e) => handleCopyClick(e)} style={{cursor: "pointer"}}>
                        <div className="col-lg-12">
                            <FontAwesomeIcon icon={copyIcon}/> {activeAccount ? trimAccount(activeAccount.address) : null}
                        </div>
                    </div>
                </div>
                <div className="dropdown-item text-primary display-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="button" onClick={(e) => handleDisconnect(e)}>
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    } else return (<div>
        <a className="nav-link link text-primary display-4"
           data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
           data-bs-auto-close="outside" aria-expanded="false">
            <svg fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12h2v4h-2z"></path>
                <path
                    d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
            </svg>
            &nbsp;Connect Wallet
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdown-237" data-bs-popper="none">

            {providers?.map((provider) => (

                <div key={provider.metadata.id} className="dropdown-item text-primary display-4">
                    <div className="row">
                        <div className="col-lg-5">
                            <img width={40}
                                 height={40}
                                 alt={`${provider.metadata.name} icon`}
                                 src={provider.metadata.icon}/>
                        </div>
                        <div className="col-lg-7">
                            <button type="button" onClick={(e) => handleConnect(e, provider)}>
                                <h5>{provider.metadata.name}&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>)
}