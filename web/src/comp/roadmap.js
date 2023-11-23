import React from 'react';
import './roadmap.css'

class Roadmap extends React.Component {

    render() {
        return <section className="timeline_area section_padding_130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <div className="section_heading text-center">
                            <br/>
                            <h3>A brief story and roadmap</h3>
                            <br/>
                            <br/>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="apland-timeline-area">
                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>Near future</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-address-card" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>⬤━⬤━⬤</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>2023 November</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-address-card" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>Website update</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-address-card" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>Instagram account created</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>2023 March</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-address-card" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>10k$ Market-cap reached</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>2023 January</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon"><i className="fa fa-address-card"
                                                                              aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>Dogs Of True Sight NFT created</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.5s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-archive" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>300 active accounts in Discord</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>2022 June</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-briefcase" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>276 NFT collection created</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.5s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-desktop" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>Algodots token introduced to a community</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-timeline-area">
                                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s">
                                    <p>2022 May</p>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="single-timeline-content d-flex wow fadeInLeft"
                                             data-wow-delay="0.3s">
                                            <div className="timeline-icon">
                                                <i className="fa fa-id-card" aria-hidden="true"></i></div>
                                            <div className="timeline-text">
                                                <h6>BlackDo-o-ots project start.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }
}

export default Roadmap;