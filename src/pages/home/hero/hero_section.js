import React from 'react';
import { faDiscord, faTwitter, faInstagram, faReddit} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from '../../../images/hero.png';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Hero.module.css';

const Hero = (props) => {
    return <>
        <Container fluid className={styles.hero_wrapper}>
            <Row className={styles.hero_section_wrapper}>
                <Col lg={5} className={styles.description_wrapper}>
                    <div>
                        <h1 className={styles.main_header}>CryptoChillouts</h1>
                    </div>
                    <div>
                        <p className={styles.description}>CryptoChillouts is a blockchain-powered virtual art showcase hosted on IPFS which represents super cool silhouette arts, We thrive to provide a colorful look to the traditional black and white silhouettes. Chillouts holders can participate in exclusive events such as NFT claims, community giveaways, and even more near in the future. Remember, all the Chillouts are cool, but some are cooler than others.</p>
                    </div>
                    <div className={styles.total_NFT_wrapper}>
                        <b>Total Chillouts NFTs: 4730 / 10000</b>
                    </div>
                    <div className={styles.social_links_wrapper}>
                        <div className={styles.social_links_heading}>Join us:</div>
                        <div className={styles.social_links}>
                            <a href="https://twitter.com/CryptoDevelop10" target="_blank" rel="noopener noreferrer">
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faTwitter} />&nbsp;
                                    Twitter
                                </button>
                            </a>
                            <a href="https://discord.com/invite/CQJ98Gm4WJ" target="_blank" rel="noopener noreferrer">
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faDiscord} />&nbsp;
                                    Discord
                                </button>
                            </a>
                            <a href="https://www.instagram.com/cryptodeveloper10/" target="_blank" rel="noopener noreferrer">
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faInstagram} />&nbsp;
                                    Instagram
                                </button>
                            </a>
                            <a href="https://www.reddit.com/user/Reasonable-Tiger-483" target="_blank" rel="noopener noreferrer">
                                <button className={styles.button}>
                                    <FontAwesomeIcon icon={faReddit} />&nbsp;
                                    Reddit
                                </button>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg={7} className={styles.hero_image_wrapper}>
                    <img src={HeroImage} alt="CryptoChillouts - Hero" />
                </Col>
            </Row>
        </Container>
    </>;
}

export default Hero;