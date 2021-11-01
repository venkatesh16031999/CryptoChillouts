import React from 'react';
import { faDiscord, faTwitter, faInstagram, faReddit} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css'


const Footer = (props) => {
    return <>
        <Container fluid className={styles.contract_header_wrapper}>
            <Row>
                <Col lg={12}>
                    <b>Contract Address:</b> <a href="https://polygonscan.com/token/0xa200a54daed579fda6f5ed86de93047bd9d595d7" target="_blank" rel="noopener noreferrer">0xa200a54daed579fda6f5ed86de93047bd9d595d7</a>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.header_wrapper}>
            <Row className={styles.header_section_wrapper}>
                <Col lg={6} md={6} className={styles.logo_wrapper}>
                    © CryptoChillouts. 2021, All rights reserved
                </Col>
                <Col lg={6} md={6} className={styles.page_links_wrapper}>
                    <a href="https://twitter.com/CryptoDevelop10" target="_blank" rel="noopener noreferrer">        
                        <div>
                            <FontAwesomeIcon className={styles.social_icons} icon={faTwitter} /><span>&nbsp;</span>
                            Twitter
                        </div>
                    </a>
                    <a href="https://discord.com/invite/CQJ98Gm4WJ" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FontAwesomeIcon className={styles.social_icons} icon={faDiscord} /><span>&nbsp;</span>
                            Discord
                        </div>
                    </a>
                    <a href="https://www.instagram.com/cryptodeveloper10/" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FontAwesomeIcon className={styles.social_icons} icon={faInstagram} /><span>&nbsp;</span>
                            Instagram
                        </div>
                    </a>
                    <a href="https://www.reddit.com/user/Reasonable-Tiger-483" target="_blank" rel="noopener noreferrer">
                        <div>
                            <FontAwesomeIcon className={styles.social_icons} icon={faReddit} /><span>&nbsp;</span>
                            Reddit
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    </>;
}

export default Footer;