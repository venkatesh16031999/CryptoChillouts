import React from 'react';
import Header from '../../components/header/header';
import './buy.css';

const Buy = (props) => {
    return <>
        <div>
        <Header></Header>
        </div>
        <div className="buy_wrapper">
        <iframe className="frame" src='https://opensea.io/collection/cryptochillouts?embed=true'
        width='100%'
        height='100%'
        title="opensea"
        frameborder='0'
        allowfullscreen></iframe>
        </div>
    </>;
}

export default Buy;