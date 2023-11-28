import React from 'react';

export default function Home() {

    function setDottedImage(e) {
        e.target.src = './images/logo.png';
    }

    function setWhiteHoodiesImage(e) {
        e.target.src = './images/merch/white_hoodie.png';
    }

    function setBlackHoodiesImage(e) {
        e.target.src = './images/merch/black_hoodie.png';
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="title col-12 col-md-6">
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
            </div>
            <br/>
            <div className="row justify-content-center">
                <div className="title col-sm-2">
                    <br/>
                    <br/>
                    <br/>
                    <img onMouseEnter={(e) => setBlackHoodiesImage(e)}
                         onMouseLeave={(e) => setDottedImage(e)}
                         src={'./images/logo.png'} />
                </div>
                <div className="title col-12 col-sm-4">
                    <img onMouseEnter={(e) => setWhiteHoodiesImage(e)}
                         onMouseLeave={(e) => setDottedImage(e)}
                         src={'./images/logo.png'} />
                </div>
                <div className="title col-sm-2">
                    <br/>
                    <br/>
                    <br/>
                    <img onMouseEnter={(e) => setBlackHoodiesImage(e)}
                         onMouseLeave={(e) => setDottedImage(e)}
                         src={'./images/logo.png'} />
                </div>
            </div>
            <br/>
        </div>)
}