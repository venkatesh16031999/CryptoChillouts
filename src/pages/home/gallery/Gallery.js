import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './gallery.module.css';

const Marketplace = (props) => {

    const [galleryItems, setGalleryItems] = useState([]);
    const [activeGalleryItem, setActiveGalleryItem] = useState({});
    const [pageNumber, setPageNumber] = useState(0);
  
    const increamentPage = () => {
        const pages = Math.floor(galleryItems.length / 8);
        if (pageNumber >= pages) {
            setPageNumber(pages);
        } else {
            setPageNumber((prevState) => prevState + 1);
        }
    }

    const decrementPage = () => {
        if (pageNumber <= 0) {
            setPageNumber(0);
        } else {
            setPageNumber((prevState) => prevState - 1);
        }
    }

    const fetchGalleryItems = useCallback(async () => {
      const items = await axios.get('https://raw.githubusercontent.com/venkatesh16031999/CryptoNFT/main/chillouts_gallery/gallery.json');
      setActiveGalleryItem(items.data[0]);
      setGalleryItems(items.data);
    }, [])
  
    useEffect(() => {
      fetchGalleryItems()
    }, [fetchGalleryItems])

    const start = pageNumber * 8;
    const end = start + 7;

    const displayItems = galleryItems.filter((item, index) => (index >= start && index <= end));
    const galleryItemsComponent = displayItems.length <= 0 ? <div>loading</div> : (
        displayItems.map((item) => {
          return (
              <div className={styles.gallery_list_item} onClick={() => setActiveGalleryItem(item)}>
                  <div className={styles.gallery_list_frame}>
                      <img src={item.thumbnail} alt={`CryptoChillouts - ${item.name}`} />
                  </div>
                  <button className={styles.marketplace_buy_button}>
                      {item.name}
                  </button>
              </div>
          );
      })
    );

    return <>
        <Container fluid className={styles.marketplace_wrapper}>
            <Row className={styles.marketplace_section_wrapper}>
                <Col lg={12} className={styles.title_wrapper}>
                    <h1 className={styles.main_header}>Featured Chillouts</h1>
                </Col>
            </Row>
            <Row className={styles.marketplace_section_wrapper}>
                <Col lg={12} className={styles.description_wrapper}>
                    <h3 className={styles.main_description}>CryptoChillouts featured NFT gallery, pick a favourite chillout and grab it on NFT marketplaces</h3>
                </Col>
            </Row>
            <Row className={styles.gallery_wrapper}>
                <Col lg={5} className={styles.gallery_section_wrapper}>
                    <div className={styles.gallery_frame_wrapper}>
                        <div className={styles.gallery_frame}>
                            <img src={activeGalleryItem.gif} alt={activeGalleryItem.name} />
                        </div>
                    </div>
                </Col>
                <Col lg={7} className={styles.gallery_list_wrapper}>
                    <div className={styles.gallery_list}>
                        {galleryItemsComponent}
                    </div>
                    <div className={styles.pagination_section}>
                        <div className={styles.pagination_wrapper}>
                            <button className={styles.marketplace_buy_button} onClick={decrementPage}>
                                Previous
                            </button>
                        </div>
                        <div className={styles.pagination_wrapper}>
                            <button className={styles.marketplace_buy_button} onClick={increamentPage}>
                                Next
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>;
}

export default Marketplace;