import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './roadmap.module.css';
import RoadmapOne from '../../images/roadmap1.png';
import RoadmapTwo from '../../images/roadmap2.png';
import RoadmapThree from '../../images/roadmap3.png';
import RoadmapFour from '../../images/roadmap4.png';
import RoadmapFive from '../../images/roadmap5.png';
import RoadmapSix from '../../images/roadmap6.png';
import RoadmapSeven from '../../images/roadmap7.png';
import RoadmapEight from '../../images/roadmap8.png';
import { Container, Row, Col } from 'react-bootstrap'

const Roadmap = (props) => {
    return <>
        <Container fluid className={styles.roadmap_wrapper}>
            <Row className={styles.roadmap_section_wrapper}>
                <Col lg={12} className={styles.title_wrapper}>
                    <h1 className={styles.main_header}>Roadmap</h1>
                </Col>
            </Row>
            <Row className={styles.roadmap_section_wrapper}>
                <Col lg={12} className={styles.description_wrapper}>
                    <h3 className={styles.main_description}>CryptoChillouts NFTs are exclusively available on multiple platforms for trading and reselling, as there we are hosted on polygon chain, where users can trade them at very low gas cost.</h3>
                </Col>
            </Row>
            <br/>
            <Row className={styles.roadmap_section_wrapper}>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapTwo} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>CryproChillouts Launch: </b><br /></span>CryptoChillouts is a blockchain-powered virtual art showcase hosted on IPFS which represents super cool silhouette arts, We thrive to provide a colorful look to the traditional black and white silhouettes.
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                6th September 2021
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                Completed
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapOne} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Listing on Opensea: </b><br /></span>CryptoChillouts NFTs are officially listed on the Opensea platform on polygon chain.
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                10th September 2021
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                Completed
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapThree} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Listing on Cargo: </b><br /></span>CryptoChillouts NFTs are officially listed on the Cargo platform on polygon chain.
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                12th September 2021
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                Completed
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapFour} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Listing on Lootex and 50 Chillouts Giveaway: </b><br /></span>CryptoChillouts NFTs are officially listed on the Lootex platform on polygon chain and we have currently featured as hottest selling NFT collection in Lootex. And also we have hosted 50 Chillouts giveaway on reddit. 
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                1st October
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                Completed
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapFive} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Listing on NFTrade and Halloween Chillouts launch: </b><br /></span>CryptoChillouts NFTs are officially listed on the Lootex platform on polygon chain and our NFT collection is one of the Verified collections in NFTrade. We have also launched a super cool 300 Hallowen versioned Chillouts. 
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                15th October 2021
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                Completed
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapSix} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Growing the community : </b><br /></span> We are currently in the phase of growing our NFT community and its visibility. We are planing to do a large promotions and planing to bring even more value to CryptoChillouts
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                Present
                            </button>
                            <button className={styles.marketplace_buy_button}>
                                On process
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapSeven} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>CryptoChillouts Members club: </b><br /></span> We are going to launch a CryptoChillouts members club for the Chillouts holders. We have categorized into three level of membership access. Please look at the website for more information. 
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                Upcoming
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg={12} className={styles.roadmap_item}>
                    <div className={styles.roadmap_item_image_wrapper}>
                        <img src={RoadmapEight} alt="CryptoChillouts - Roadmap" />
                    </div>
                    <div>
                        <div className={styles.roadmap_item_description}>
                            <span className={styles.roadmap_item_heading}><b>Comming soon: </b><br /></span> We have many plans to drive the worth of CryptoChillouts to moon, we are going to launch a virtual art showcase for artist and members. We have a plan to drop few more CryptoChillouts and its second version on upcoming months, stay tunned and club members will get a advantage on these drops. Still there are lots of things that will join our journey.
                        </div>
                        <div className={styles.roadmap_item_tag}>
                            <button className={styles.marketplace_buy_button}>
                                Upcoming
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>;
}

export default Roadmap;