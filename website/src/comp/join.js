import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export default function JoinPage() {

    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (e) => {
        e.preventDefault();
        setModalShow(true);
    }

    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-6 my-auto">
                <p className="text-muted d-none d-lg-block">We don't get payed, but we are building more then a project. We are building a
                    community.</p>
                <br/>
                <p className="text-lg-start lh-base">If you are passioned about Crypto and NFT and you're ready to be
                    part of
                    something extraordinary and
                    contribute your talents, we want to hear from you!</p>
                <br/>
                <p className="align-left fs-5">Why Join for Free?</p>
                <p className="align-left lh-base d-none d-lg-block">
                    While we understand the importance of financial compensation, joining our team for free offers
                    unique benefits:</p>

                <ul className="align-left">
                    <li>
                        <b>Shared Vision:</b> Everyone on our team is committed to the project's success, creating a shared vision that goes beyond monetary incentives.
                    </li>
                    <li>
                        <b>Portfolio Building:</b> This project provides an excellent opportunity to add impactful work
                        to your portfolio.
                    </li>
                    <li>
                        <b>Long-Term Opportunities:</b> As the project grows, so do the opportunities. Your dedication
                        and
                        contributions could lead to future paid roles or collaborations.
                    </li>
                </ul>
                <br/>
                <p className="fs-5 lh-base">Let's make a difference together! 🚀</p>
                <br/>
                <p>Contact <a href="https://discord.gg/Cb9y2TUG" target="_blank">@dispersij</a> in Discord or
                    click <a href="" onClick={(e) => handleModalShow(e)}>here</a> to contact using website.
                </p>
            </div>
            <div className="col-5">
                <img src={'./images/dots/dot1.png'}/>
            </div>
            <Modal show={modalShow} onHide={handleModalClose} size="md"
                   aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Your email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Send email
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}