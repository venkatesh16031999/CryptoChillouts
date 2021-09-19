import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import { Container, Row, Col} from 'react-bootstrap';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.png';
import Discord from '../../images/Discord.png';
import HeroShill from '../../images/Shill.png';
import One from '../../images/1.png';
import Two from '../../images/2.png';
import Three from '../../images/3.png';
// import Four from '../../images/4.png';
import  CommingSoonOne from '../../images/comming_soon_1.png';
import  CommingSoonTwo from '../../images/comming_soon_2.png';
import  CommingSoonThree from '../../images/comming_soon_3.png';
import Logo from '../../images/Logo.png';
import Opensea from '../../images/opensea.png'
import './home.css';

const Home = (props) => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeGalleryItem, setActiveGalleryItem] = useState({});

  const fetchGalleryItems = useCallback(async () => {
    const items = await axios.get('https://raw.githubusercontent.com/venkatesh16031999/CryptoNFT/main/chillouts_gallery/gallery.json');
    console.log(items);
    setActiveGalleryItem(items.data[0]);
    setGalleryItems(items.data);
  }, [])

  useEffect(() => {
    fetchGalleryItems()
  }, [fetchGalleryItems])

  const galleryItemsComponent = galleryItems.length <= 0 ? <div>loading</div> : (
    galleryItems.map((item) => {
        return (
            <div className="gallery_list_item" onClick={() => setActiveGalleryItem(item)}>
                <div className={`gallery_list_frame ${item.name === activeGalleryItem.name ? 'gallery_active' : ''}`}>
                    <img src={item.thumbnail} alt={`CryptoChillouts - ${item.name}`} />
                </div>
            </div>
        );
    })
  );

    return <div className="home_wrapper">
        <Container fluid>
            <Row className="header_wrapper">
                <Col md="6" lg="7">
                    <Link to="/buy" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="buy_collection_wrapper">
                        <div className="opensea_social_icon">
                            <img src={Opensea} alt="Opensea" />
                        </div>
                        <p className="buy_collection_para"><b>Buy CryptoChillouts</b></p>
                    </div>
                    </Link>
                    <div className="logo_wrapper">
                        <div className="logo_icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CryptoDevelop10"><img src={Logo} alt="Twitter" /></a>
                        </div>
                        <p className="buy_collection_para">CryptoChillouts</p>
                    </div>
                </Col>
                <Col md="6" lg="5" style={{zIndex: 100}}>
                    <div className="header_right_link">
                    <Row className="link_baseline">
                        <Col>
                            <p className="header_link_item"></p>
                        </Col>
                        <Col>
                            <HashLink style={{ textDecoration: 'none', color: 'black' }} to="/home/#chillouts"><p className="header_link_item"><b>Chillouts</b></p></HashLink>
                        </Col>
                        <Col>
                            <HashLink style={{ textDecoration: 'none', color: 'black' }} to="/home/#roadmap"><p className="header_link_item"><b>Roadmap</b></p></HashLink>
                        </Col>
                        <Col className="social_icon_wrapper">
                            <div className="social_icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cryptodeveloper10/"><img src={Instagram} alt="Instagram" /></a>
                            </div>
                            <div className="social_icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CryptoDevelop10"><img src={Twitter} alt="Twitter" /></a>
                            </div>
                            <div className="social_icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/CQJ98Gm4WJ"><img src={Discord} alt="Twitter" /></a>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
            <Row className="hero_wrapper">
                <Col lg="7">
                    <Row className="hero_heading">
                        <div>
                            <h1 className="backgrounded_para_one">Crypto</h1>
                        </div>
                        <div>
                            <h1 className="backgrounded_para_two">Chillouts</h1>
                        </div>
                    </Row>
                    <Row className="hero_body_wrapper">
                        <div>
                            <h2><b>Collective of art designs</b></h2>
                            <p className="hero_text" >
                            CryptoChillouts is a blockchain-powered virtual art showcase- Chillouts are unique ERC 721 NFTs hosted on IPFS that represent cute and adorable arts, We thrive to provide a colorful look to the traditional black and white silhouettes. Chillouts holders can participate in exclusive events such as NFT claims, community giveaways, and even more near in the future. Remember, all the Chillouts are cool, but some are cooler than others.
                            </p>
                        </div>
                    </Row>
                </Col>
                <Col lg="5" className="hero_image_wrapper">
                    <div className="hero_image_item">
                        <img src={HeroShill} alt="heroimage" />
                    </div>
                </Col>
            </Row>
            <Row className="gallery_wrapper" id="chillouts">
                <Col lg="5">
                    <div className="featured_image">
                        <h2><b>Featured Chillouts</b></h2>
                    </div>
                    <div className="gallery_frame">
                        <img src={activeGalleryItem.gif} alt={activeGalleryItem.name} />
                    </div>
                </Col>
                <Col lg="7" className="gallery_list_wrapper">
                    <div className="gallery_list">
                        {galleryItemsComponent}
                    </div>
                </Col>
            </Row>
            <Row className="roadmap_wrapper" id="roadmap">
                <Col>
                    <div>
                        <h2><b>Roadmap</b></h2>
                    </div>
                    <div className="roadmap_list">
                        <div className="roadmap_item">
                            <div className="roadmap_item_count"><img src={One} alt="roadmap one" /></div>
                            <p>Launch CryptoChillouts art collection. Further moving forward, we are going to staff up and grow out our Social media presence.</p>
                            <p>We will schedule a community giveaway for the first 1k members and for the top active members will get rare Chillouts on each drop.</p>
                            <p>Community is key and we will strive to have one of the best!</p>
                            <p><b>( September 2021 - Present )</b></p>
                        </div>
                        <div className="roadmap_item">
                            <div className="roadmap_item_count"><img src={Two} alt="roadmap two" /></div>
                            <p>Cinematic, weoponized and other cool Chillouts drops. Specialized presale for community memebers.</p>
                            <p>Releasing the plan for Chillouts Art showcase. Community members will get a special access to art showcase which they can use to buy/sell NFTs.</p>
                            <p><b>( Novemeber 2021 - December 2021 )</b></p>
                        </div>
                        <div className="roadmap_item">
                            <div className="roadmap_item_count"><img src={Three} alt="roadmap three" /></div>
                            <p>Build and Launch a art showcase for the CryptoChillouts and other cools NFT collections.</p>
                            <p>Monthly NFTs drops. Monthly Collaborations with other artists and projects.</p>
                            <p><b>( 2022 and Beyond )</b></p>
                        </div>
                        {/* <div className="roadmap_item">
                            <div className="roadmap_item_count"><img src={Four} alt="roadmap four" /></div>
                            <p>CryptoChillouts is a blockchain-powered virtual art - Chillouts are unique NFTs that represent cute and adorable arts, Collect and strengthen your</p>
                            <p>CryptoChillouts is a blockchain-powered virtual art - Chillouts are unique NFTs that represent cute and adorable arts, Collect and strengthen your</p>
                            <p>CryptoChillouts is a blockchain-powered virtual art - Chillouts are unique NFTs that represent cute and adorable arts, Collect and strengthen your</p>
                            <p>CryptoChillouts is a blockchain-powered virtual art - Chillouts are unique NFTs that represent cute and adorable arts, Collect and strengthen your</p>
                        </div> */}
                    </div>
                </Col>
            </Row>
            <Row className="comming_soon_wrapper">
                <Col>
                    <div>
                        <h3><b>More Chillouts comming soon</b></h3>
                    </div>
                </Col>
            </Row>
            <Row className="comming_soon_item_wrapper">
                <Col sm="12" lg="4" md="4" className="comming_soon_center">
                    <div className="comming_soon_item">
                        <img src={CommingSoonOne} alt="CryptoChillout - comming soon" />
                    </div>
                </Col>
                <Col sm="12" lg="4" md="4" className="comming_soon_center">
                    <div className="comming_soon_item">
                        <img src={CommingSoonTwo} alt="CryptoChillout - comming soon" />
                    </div>
                </Col>
                <Col sm="12" lg="4" md="4" className="comming_soon_center">
                    <div className="comming_soon_item">
                        <img src={CommingSoonThree} alt="CryptoChillout - comming soon" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="footer_wrapper">
                    <div className="social_icon_wrapper">
                        <div className="social_icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cryptodeveloper10/"><img src={Instagram} alt="Instagram" /></a>
                        </div>
                        <div className="social_icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CryptoDevelop10"><img src={Twitter} alt="Twitter" /></a>
                        </div>
                        <div className="social_icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/CQJ98Gm4WJ"><img src={Discord} alt="Twitter" /></a>
                        </div>
                    </div>
                    <div className="copy_right_section">
                        <p>© CryptoChillouts. 2021, All rights reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>;
}

export default Home;