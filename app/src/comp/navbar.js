import ConnectWallet from "./connectWallet";
import AccountButton from "./accountButton";

import {useWallet} from '@txnlab/use-wallet'

export default function Navbar() {

    const {providers, activeAccount, getAssets, isReady} = useWallet();

    return <section className="menu cid-s48OLK6784">
        <nav className="navbar navbar-dropdown navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-caption-wrap">
                        <a className="navbar-caption text-black text-primary display-7" href="/">⬤━⬤━⬤</a></span>
                </div>
                <div className="navbar-nav nav-right">
                    {isReady ? activeAccount ? <AccountButton/> : <ConnectWallet/> : null}
                </div>
            </div>
        </nav>
    </section>;
}