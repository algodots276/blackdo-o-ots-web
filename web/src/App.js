// Pages
import Navbar from './comp/navbar';
import Home from './comp/home';
import Roadmap from './comp/roadmap';
import WhitePaper from "./comp/whitepaper";
import Footer from "./comp/footer";

import {Routes, Route} from 'react-router-dom';

import './App.css';

import './assets/theme/css/style.css';
import './assets/dropdown/css/style.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/css/bootstrap-reboot.min.css';
import './assets/bootstrap/css/bootstrap-grid.min.css';
import './assets/mobirise/css/mbr-additional.css';

// use-wallet
import {WalletProvider, useInitializeProviders, PROVIDER_ID} from '@txnlab/use-wallet'
import {DeflyWalletConnect} from '@blockshake/defly-connect'
import {PeraWalletConnect} from '@perawallet/connect'

export default function App() {

    const providers = useInitializeProviders({
        providers: [
            {id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect},
            {id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect},
            {id: PROVIDER_ID.EXODUS}
        ]
    })

    return (
        <WalletProvider value={providers}>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/roadmap" element={<Roadmap/>}/>
                    <Route path="/whitepaper" element={<WhitePaper/>}/>
                </Routes>
                <Footer/>
            </div>
        </WalletProvider>
    );
}