import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import AboutImage from '../../images/about.png';
import { useWeb3 } from '../../context/web3-context';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import styles from './members.module.css';

const Members = (props) => {
    const [balance, setBalance] = useState(0);
    const { store, getContract } = useWeb3();
    const [state] = store;

    const getProgressComponent = (percentage = 0, level = 0) => (
        <>
            <div>
                <ProgressBar variant={level === 3 ? 'success' : level === 2 ? 'warning' : 'danger'} animated className={styles.progress} now={percentage}/>
            </div> 
            <div className={styles.progress_stats}>
                { level <= 0 ? <p><b>Progress: {percentage}%</b> - Oops! it seems you are not eligible. Buy more CryptoChillouts to get the membership access 🥳🎉.</p> : <p><b>Progress: {percentage}%</b> - Congratulations! you are selected for the level {level} membership access 🥳🎉.</p> }
            </div>
        </>
    );

    let progressComponent = getProgressComponent(0, 0);

    if (balance >= 10) {
        progressComponent = getProgressComponent(100, 3);
    } else if (balance === 5) {
        progressComponent = getProgressComponent(50, 2);
    } else if (balance === 3) {
        progressComponent = getProgressComponent(30, 1);
    } else if (balance <= 10 && balance >= 0) {
        progressComponent = getProgressComponent(balance * 10, balance >= 3 ? 1 : balance >= 5 ? 2 : balance >= 10 ? 10 : 0);
    }

    const fetchTokenBalance = async () => {
        const contract = await getContract();
        const walletAddress = state.walletAddress;

        if (contract) {
            const balanceOfOwner = await contract.methods
            .balanceOf(walletAddress)
            .call();
            setBalance(balanceOfOwner);
        }

    }

    useEffect(() => {
        fetchTokenBalance();
    });

    return <>
        <Container fluid className={styles.member_wrapper}>
            <Row className={styles.member_section_wrapper}>
                <Col lg={7} className={styles.description_wrapper}>
                    <div>
                        <h2 className={styles.main_header}>CryptoChillouts members club</h2>
                    </div>
                    <div>
                        <p className={styles.description}>CryptoChillouts membership access are categorized as three levels and to get access for the membership club, user must hold the CryptoChillouts NFTs</p>
                    </div>
                    <div>
                        <p className={styles.description}><b>Level One</b> - Hold <b>3</b> CryptoChillouts NFT</p>
                    </div>
                    <div>
                    <p className={styles.description}><b>Level Two</b> - Hold <b>5</b> CryptoChillouts NFTs</p>
                    </div>
                    <div>
                    <p className={styles.description}><b>Level Three</b> - Hold <b>10</b> CryptoChillouts NFTs</p>
                    </div>
                    <div className={styles.progress_wrapper}>
                        {progressComponent}
                    </div>
                    <div className={styles.holdings_wrapper}>
                        <div className={styles.holdings_heading}>Your CryptoChillouts NFT Holdings:</div>
                        <div className={styles.holdings}>
                            {balance}
                        </div>
                    </div>
                </Col>
                <Col lg={5} className={styles.member_image_wrapper}>
                    <img src={AboutImage} alt="CryptoChillouts - Members" />
                </Col>
            </Row>
            <Row className={styles.benifits_header_wrapper}>
                <Col lg={12} className={styles.title_wrapper}>
                    <h1 className={styles.main_header}>Benefits</h1>
                </Col>
            </Row>
            <Row className={styles.benefits_wrapper}>
                <Col lg={3} className={styles.benefits_card}>
                    <div className={styles.benefits_card_header_wrapper}>
                        <h3 className={styles.benefits_card_header}>Level 1</h3>
                    </div>
                    <div className={styles.benefits_card_comming_soon_wrapper}>
                        <h3 className={styles.benefits_card_comming_soon_header}>Comming soon...</h3>
                    </div>
                    <div className={styles.benefits_button_wrapper}>
                        <button className={styles.marketplace_buy_button}>
                            Locked
                        </button>
                    </div>
                </Col>
                <Col lg={3} className={styles.benefits_card}>
                    <div className={styles.benefits_card_header_wrapper}>
                        <h3 className={styles.benefits_card_header}>Level 2</h3>
                    </div>
                    <div className={styles.benefits_card_comming_soon_wrapper}>
                        <h3 className={styles.benefits_card_comming_soon_header}>Comming soon...</h3>
                    </div>
                    <div className={styles.benefits_button_wrapper}>
                        <button className={styles.marketplace_buy_button}>
                            Locked
                        </button>
                    </div>
                </Col>
                <Col lg={3} className={styles.benefits_card}>
                    <div className={styles.benefits_card_header_wrapper}>
                        <h3 className={styles.benefits_card_header}>Level 3</h3>
                    </div>
                    <div className={styles.benefits_card_comming_soon_wrapper}>
                        <h3 className={styles.benefits_card_comming_soon_header}>Comming soon...</h3>
                    </div>
                    <div className={styles.benefits_button_wrapper}>
                        <button className={styles.marketplace_buy_button}>
                            Locked
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>;
}

export default Members;