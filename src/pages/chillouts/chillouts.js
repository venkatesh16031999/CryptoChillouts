import React from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './chillouts.module.css';
import { Container, Row, Col } from 'react-bootstrap'

const Roadmap = (props) => {
    return <>
        <Container fluid className={styles.chillouts_wrapper}>
            <Row className={styles.chillouts_section_wrapper}>
                <Col lg={12} className={styles.chillouts_comming_soon}>
                    <h2 className={styles.main_header}>Comming soon...</h2>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>;
}

export default Roadmap;