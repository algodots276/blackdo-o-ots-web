import React from "react";
import {useParams} from 'react-router';
import QRCode from "react-qr-code";

export default function Dog() {

    const params = useParams()

    return (<div className="container">
        <br/>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card mb-2">
                        <img src={"https://ipfs.algonode.xyz/ipfs/" + params.ipfs + "/" + params.id}/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}