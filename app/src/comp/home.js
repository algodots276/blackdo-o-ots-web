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
                <h2 className="mbr-section-title mbr-fonts-style align-center mb-4 display-5">
                    <strong>Ready to spend your <svg className="algorand-logo"
                                                     width="32" height="32"
                                                     viewBox="0 0 32 32">
                        <path
                            d="M32 32H27.0095L23.7387 19.9201L16.725 32H11.1275L21.9515 13.2913L20.1981 6.76341L5.59747 32H0L18.5121 0H23.4352L25.5595 7.97476H30.6175L27.1781 13.9642L32 32Z"
                            fill="var(--text-main)"></path>
                    </svg>&nbsp;dots?</strong>
                </h2>
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