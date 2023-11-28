// Pages
import Navbar from './comp/navbar';
import Home from './comp/home';
import Roadmap from './comp/roadmap';
import WhitePaper from "./comp/whitepaper";
import Footer from "./comp/footer";
import JoinPage from "./comp/join";

import {Routes, Route} from 'react-router-dom';

import './App.css';

import './assets/theme/css/style.css';
import './assets/dropdown/css/style.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/css/bootstrap-reboot.min.css';
import './assets/bootstrap/css/bootstrap-grid.min.css';
import './assets/mobirise/css/mbr-additional.css';


export default function App() {

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/join" element={<JoinPage/>}/>
                <Route path="/roadmap" element={<Roadmap/>}/>
                <Route path="/whitepaper" element={<WhitePaper/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}