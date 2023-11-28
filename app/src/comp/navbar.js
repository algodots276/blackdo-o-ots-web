import ConnectWallet from "./connectWallet";
import AccountButton from "./accountButton";

import {useWallet} from '@txnlab/use-wallet'

export default function Navbar() {

    const {providers, activeAccount, getAssets, isReady} = useWallet();

    return <div className="row my-auto" >
        <div className="col-1"></div>
        <div className="col-10 my-auto">
            <div className="row">
                <div className="col-4 my-auto align-left">
                    <span>⬤━⬤━⬤</span>
                </div>
                <div className="col-8 align-right my-auto">
                    {isReady ? activeAccount ? <AccountButton/> : <ConnectWallet/> : null}
                </div>
            </div>
        </div>
        <div className="col-1"></div>

    </div>;
}