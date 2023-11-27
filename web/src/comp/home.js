import React from 'react';
import {useWallet} from '@txnlab/use-wallet'
import Merch from "./merch";

export default function Home() {

    const {activeAccount} = useWallet();

    if (activeAccount) {
        return <Merch/>
    }

    return (<div className="container home">
        <div className="row justify-content-center">
            <div className="title col-12 col-md-5">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-5">
                    <strong className="mbr-bold">BlackDo-o-ots</strong>
                </h3>
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-5"><strong>⬤━⬤━⬤</strong>
                </h3>
                <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">&nbsp; <strong>Empower
                    creativity, inspire and spark your imagination<br/><br/></strong></h4>
            </div>
        </div>
    </div>);
}