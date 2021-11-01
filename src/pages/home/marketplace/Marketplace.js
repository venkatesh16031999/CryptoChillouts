import React from 'react';
import Logo from '../../../images/Logo.png';
import OpenseaImage from '../../../images/opensea.png';
import LootexImage from '../../../images/lootex.jpg';
import NFTradeImage from '../../../images/NFTrade.jpg';
import CargoImage from '../../../images/cargo.png';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './marketplace.module.css';

const Marketplace = (props) => {
    return <>
        <Container fluid className={styles.marketplace_wrapper}>
            <Row className={styles.marketplace_section_wrapper}>
                <Col lg={12} className={styles.title_wrapper}>
                    <h1 className={styles.main_header}>NFT Marketplace</h1>
                </Col>
            </Row>
            <Row className={styles.marketplace_section_wrapper}>
                <Col lg={12} className={styles.description_wrapper}>
                    <h3 className={styles.main_description}>CryptoChillouts NFTs are exclusively available on multiple platforms for trading and reselling, we have hosted the Chillouts on polygon chain, where users can trade them at very low gas cost.</h3>
                </Col>
            </Row>
            <Row className={styles.marketplace_section_list_wrapper}>
                <Col lg={2} md={4} className={styles.description_wrapper}>
                    <div className={styles.marketplace_card_wrapper}>
                        <div className={styles.marketplace_logo_wrapper}>
                            <img src={OpenseaImage} alt="CryptoChillouts - Opensea" />
                        </div>
                        <div className={styles.marketplace_name}>
                            Opensea
                        </div>
                        <a href="https://opensea.io/collection/cryptochillouts" target="_blank" rel="noopener noreferrer">
                            <button className={styles.marketplace_buy_button}>
                                Buy CryptoChillouts
                            </button>    
                        </a> 
                    </div>
                </Col>
                <Col lg={2} md={4} className={styles.description_wrapper}>
                    <div className={styles.marketplace_card_wrapper}>
                        <div className={styles.marketplace_logo_wrapper}>
                            <img src={LootexImage} alt="CryptoChillouts - Lootex" />
                        </div>
                        <div className={styles.marketplace_name}>
                            Lootex
                        </div>
                        <a href="https://lootex.io/stores/crypto-chillouts" target="_blank" rel="noopener noreferrer">
                            <button className={styles.marketplace_buy_button}>
                                Buy CryptoChillouts
                            </button>    
                        </a> 
                    </div>
                </Col>
                <Col lg={2} md={4} className={styles.description_wrapper}>
                    <div className={styles.marketplace_card_wrapper}>
                        <div className={styles.marketplace_logo_wrapper}>
                            <img src={NFTradeImage} alt="CryptoChillouts - NFTrade" />
                        </div>
                        <div className={styles.marketplace_name}>
                            NFTrade
                        </div>
                        <a href="https://app.nftrade.com/assets/polygon/0xa200a54daed579fda6f5ed86de93047bd9d595d7" target="_blank" rel="noopener noreferrer">
                            <button className={styles.marketplace_buy_button}>
                                Buy CryptoChillouts
                            </button>    
                        </a> 
                    </div>
                </Col>
                <Col lg={2} md={4} className={styles.description_wrapper}>
                    <div className={styles.marketplace_card_wrapper}>
                        <div className={styles.marketplace_logo_wrapper}>
                            <img src={CargoImage} alt="CryptoChillouts - Cargo" />
                        </div>
                        <div className={styles.marketplace_name}>
                            Cargo
                        </div>
                        <a href="https://app.cargo.build/collection/6137d0aad2a00a0008cab4fa" target="_blank" rel="noopener noreferrer">
                            <button className={styles.marketplace_buy_button}>
                                Buy CryptoChillouts
                            </button>    
                        </a> 
                    </div>
                </Col>
                <Col lg={2} md={4} className={styles.description_wrapper}>
                    <div className={styles.marketplace_card_wrapper}>
                        <div className={styles.marketplace_logo_wrapper}>
                            <img src={Logo} alt="CryptoChillouts - Logo" />
                        </div>
                        <div className={styles.marketplace_name}>
                            Comming soon...
                        </div>
                        <a href="https://cryptochillouts.com" target="_blank" rel="noopener noreferrer">
                            <button className={styles.marketplace_buy_button}>
                                Buy CryptoChillouts
                            </button>    
                        </a> 
                    </div>
                </Col>
            </Row>
        </Container>
    </>;
}

export default Marketplace;