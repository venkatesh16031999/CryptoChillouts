import React from 'react';
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return <>
        <header>
        <Container fluid>
            <Row className="header_wrap">
                <Col>
                    <Link className="logo" to="/home"><p>CryptoChillouts</p></Link>
                </Col>
            </Row>
        </Container>
        </header>
    </>;
}

export default Header;