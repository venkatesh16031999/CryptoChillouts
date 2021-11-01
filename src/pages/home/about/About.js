import React from 'react';
import AboutImage from '../../../images/about.png';
import OpenseaOne from '../../../images/opensea1.png';
import NFTradeOne from '../../../images/NFTrade1.svg'
import LootexOne from '../../../images/lootex1.png'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css';

const About = (props) => {
    return <>
        <Container fluid className={styles.hero_wrapper}>
            <Row className={styles.hero_section_wrapper}>
                <Col lg={5} className={styles.description_wrapper}>
                    <div>
                        <h2 className={styles.main_header}>About CryptoChillouts</h2>
                    </div>
                    <div>
                        <p className={styles.description}>We got an inspiration from silhouette photography, silhouette that conveys drama, mystery, mood, and emotion to the viewers with the abstraction of object, where viewers can imagine and feel the look as per their mood, but so far silhouettes arts are traditionally black and white in nature, here we are trying to provide a colorful look to silhouettes ( aka. chillouts ).</p>
                    </div>
                    <div>
                        <h2 className={styles.sub_header}>Loved by</h2>
                    </div>
                    <div className={styles.loved_by_wrapper}>
                        <div className={styles.loved_by_item_wrapper}>
                            <img src={LootexOne} alt="CryptoChillouts - Lootex Logo" />
                        </div>
                        <div className={styles.loved_by_item_wrapper}>
                            <img src={OpenseaOne} alt="CryptoChillouts - Opensea Logo" />
                        </div>
                        <div className={styles.loved_by_item_wrapper}>
                            <img src={NFTradeOne} alt="CryptoChillouts - NFTrade Logo" />
                        </div>
                        {/* <div className={styles.loved_by_item_wrapper}>
                            <img src={OpenseaOne} alt="" />
                        </div>
                        <div className={styles.loved_by_item_wrapper}>
                            <img src={OpenseaOne} alt="" />
                        </div> */}
                    </div>
                </Col>
                <Col lg={7} className={styles.hero_image_wrapper}>
                    <img src={AboutImage} alt="CryptoChillouts - About" />
                </Col>
            </Row>
        </Container>
    </>;
}

export default About;