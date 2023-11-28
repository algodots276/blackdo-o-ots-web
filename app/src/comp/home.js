import React from 'react';

export default function Home() {

    function setDot(e) {
        e.target.src = './images/logo.png';
    }

    function setWhiteHoodiesImage(e) {
        e.target.src = './images/merch/white_hoodie.png';
    }

    function setBlackHoodiesImage(e) {
        e.target.src = './images/merch/black_hoodie.png';
    }

    return (
        <div class="row">
            <div className="col-sm-12">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <img onMouseEnter={(e) => setWhiteHoodiesImage(e)}
                             onMouseLeave={(e) => setDot(e)}
                             src={'./images/logo.png'}
                             style={ {transition: "src 2s ease-in-out"}}/>
                    </div>
                    <div className="col-sm-4">
                        <img onMouseEnter={(e) => setWhiteHoodiesImage(e)}
                             onMouseLeave={(e) => setBlackHoodiesImage(e)}
                             src={'./images/merch/black_hoodie.png'}/>
                    </div>
                    <div className="col-sm-4">
                        <img onMouseEnter={(e) => setWhiteHoodiesImage(e)}
                             onMouseLeave={(e) => setDot(e)}
                             src={'./images/logo.png'}/>
                    </div>
                </div>
            </div>
        </div>)
}