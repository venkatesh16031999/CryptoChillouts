import React, { useState } from 'react';
import Logo from '../../images/Logo.png'
import {
    NavLink
  } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import styles from './Header.module.css';
import { useWeb3 } from '../../context/web3-context';


const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { store, connectToWallet } = useWeb3();

    const [state] = store;

    const connect = async () => {
        connectToWallet();
    }

    return <>
        <Container fluid className={styles.header_wrapper}>
            <Row className={styles.header_section_wrapper}>
                <Col lg={6} md={6} xs={6} className={styles.logo_wrapper}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="CryptoChillouts - Logo" />
                    </div>
                    <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} to="/">CryptoChillouts</NavLink>
                </Col>
                <Col lg={6} className={styles.page_links_wrapper}>
                    <div>
                        <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84', border: '2px solid #474071', padding: '10px', borderRadius: '10px' }} to="/roadmap">Roadmap</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84', border: '2px solid #474071', padding: '10px', borderRadius: '10px' }} to="/members">Members club</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84', border: '2px solid #474071', padding: '10px', borderRadius: '10px' }} to="/chillouts">My Chillouts</NavLink>
                    </div>
                    <div>
                        <button className={styles.connect_button} onClick={() => connect()}>
                            {state.walletAddress ? `${state.walletAddress.split('').slice(0,10).join('')}......${state.walletAddress.split('').slice(38).join('')}` : 'Connect'}
                        </button>
                    </div>
                </Col>
                <Col md={6} xs={6} className={styles.side_bar_wrapper}>
                    <div>
                        <button className={styles.side_bar_menu} onClick={handleShow}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div>
                        <Offcanvas show={show} className={styles.offcanvas} onHide={handleClose}>
                            <Offcanvas.Header closeButton className={styles.offercanvas_header}>
                            <Offcanvas.Title><b>Menu</b></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className={styles.menu_links_wrapper}>
                                    <div className={styles.menu_button_wrapper}>
                                        <button className={styles.marketplace_buy_button} onClick={handleClose}>
                                            <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84' }} to="/roadmap">Roadmap</NavLink>
                                        </button>
                                    </div>
                                    <div className={styles.menu_button_wrapper}>
                                        <button className={styles.marketplace_buy_button} onClick={handleClose}>
                                            <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84' }} to="/members">Members club</NavLink>
                                        </button>
                                    </div>
                                    <div className={styles.menu_button_wrapper}>
                                        <button className={styles.marketplace_buy_button} onClick={handleClose}>
                                            <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} activeStyle={{ color: '#d14c84' }} to="/chillouts">My Chillouts</NavLink>
                                        </button>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </>;
}

export default Header;