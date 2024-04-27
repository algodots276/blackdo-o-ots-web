import React, {useState, useLayoutEffect} from "react";
import {useWallet} from '@txnlab/use-wallet';
import axios from 'axios';
import QRCode from "react-qr-code";

export default function Home() {

    const [dotsNFTs, setDotsNFTs] = useState([]);

    const {activeAccount, getAssets, isReady} = useWallet();

    useLayoutEffect(() => {
        if (isReady && activeAccount) {
            setDotsNFTs([]);
            getAssets().then(assets => {

                assets.forEach(asset => {
                    axios.get("https://go.getblock.io/f8c9d4073ece44bcb8033135125af668/v2/assets/" + asset['asset-id'])
                        .then(assetInfo => {
                            if (assetInfo.data.params.name.startsWith("DOTSight")) {
                                let dogUrl = assetInfo.data.params.url;
                                let fullName = assetInfo.data.params.name;
                                let name = fullName.slice(9);
                                dogUrl = dogUrl.slice(7);
                                setDotsNFTs(prevState => [...prevState, {
                                    "url": dogUrl,
                                    "name": name,
                                    "fullName": fullName,
                                    "id": asset['asset-id']
                                }])
                            }
                        });
                });

            }).catch(error => {
                // Nothing here
                console.log(error);
            });
        }

    }, [activeAccount]);

    if (isReady && activeAccount) {
        return (
            <div>
                <p><br/><br/></p>
                <div id="carouselMultiItemExample"
                    data-mdb-carousel-init className="carousel slide carousel-dark text-center"
                    data-mdb-ride="carousel"
                >
                    <div className="carousel-inner py-4">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">

                                    {dotsNFTs.map(function (dog, i) {
                                        return <div className="col-lg-4">
                                            <div className="card mb-2">
                                                <div style={{'position':'relative'}}>
                                                    <img
                                                        src={"https://ipfs.algonode.xyz/ipfs/" + dog.url}
                                                    />
                                                    <QRCode style={{ position: 'absolute', top: 0, right: 0, padding: '5px' }}
                                                        size={75}
                                                        value={window.location.href + "dog/" + dog.url}
                                                        viewBox={`0 0 75 75`} />
                                                </div>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-sm-4 align-left">
                                                            <h5 className="card-title">{dog.name}</h5>
                                                        </div>
                                                        <div className="col-sm-8 align-right">

                                                            <a target={"_blank"}
                                                               href={"https://allo.info/asset/" + dog.id + "/nft"}>Allo</a>
                                                            &nbsp;
                                                            <a target={"_blank"}
                                                               href={"https://www.asalytic.app/nft/" + dog.id}>Asalytic</a>
                                                            &nbsp;
                                                            <a target={"_blank"}
                                                               href={"https://www.randgallery.com/algo-collection/?address=" + dog.id}>Rand
                                                                Gallery</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>;

                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>)
    } else {
        return (<div className="container home">
            <div className="row justify-content-center">
                <div className="title col-12 col-md-5">
                    <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                        &nbsp; <strong>Connect your wallet to view NFTs<br/><br/></strong></h4>
                </div>
            </div>
        </div>);
    }
}