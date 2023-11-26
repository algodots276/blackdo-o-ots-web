import React, {useState,useEffect} from "react";

import {useWallet} from '@txnlab/use-wallet'
import {useNavigate} from "react-router-dom";

export default function ConnectWallet() {

    const [algoAsset, setAlgoAsset] = useState(undefined);
    const navigate = useNavigate();
    const {providers, activeAccount, status, getAssets } = useWallet();

    function handleConnect(e, provider) {
        provider.connect();
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
        return accountAddress.substring(0, 3) + "..." + accountAddress.substring(accountAddress.length - 2, accountAddress.length);
    }

    if (activeAccount && getProviderById(activeAccount.providerId)) {
        getAssets().then(assets => {
            const dots = assets.filter(a => a['asset-id'] == 287867876);
            setAlgoAsset(dots[0]);
        });
        return (<div>
            <button className="nav-link link text-primary display-4"
                    data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
                    data-bs-auto-close="inside" aria-expanded="false">
                <div className="row">
                    <div className="col-md-3 align-right">
                        <img
                            width={25}
                            height={25}
                            alt={`${getProviderById(activeAccount.providerId).metadata.name} icon`}
                            src={getProviderById(activeAccount.providerId).metadata.icon}
                        />
                    </div>
                    <div className="col-md-9 align-left flex-nowrap">
                        <p>{trimAccount(activeAccount.address)}&nbsp;{algoAsset ? "| " + trimAlgoBalance(algoAsset.amount) : null}</p>
                    </div>
                </div>
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdown-237" data-bs-popper="none">
                <div className="dropdown-item text-primary display-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <button type="button" onClick={getProviderById(activeAccount.providerId).disconnect}>
                                Disconnect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    return (<div>
        <button className="nav-link link text-primary display-4"
                data-toggle="dropdown-submenu" data-bs-toggle="dropdown"
                data-bs-auto-close="outside" aria-expanded="false">
            <svg fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12h2v4h-2z"></path>
                <path
                    d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
            </svg>
            &nbsp;Connect Wallet
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdown-237" data-bs-popper="none">

            {providers?.map((provider) => (

                <div key={provider.metadata.id} className="dropdown-item text-primary display-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <img width={40}
                                 height={40}
                                 alt={`${provider.metadata.name} icon`}
                                 src={provider.metadata.icon}/>
                        </div>
                        <div className="col-lg-8">
                            <button type="button" onClick={(e) => handleConnect(e, provider)}>
                                <h5>{provider.metadata.name}</h5>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>)
}