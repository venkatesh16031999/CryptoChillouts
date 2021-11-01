import React from 'react';
import Hero from './hero/hero_section'
import Marketplace from './marketplace/Marketplace'
import Gallery from './gallery/Gallery';
import About from './about/About';
import Footer from '../../components/Footer/Footer'

const Home = (props) => {
    return <>
        <Hero />
        <Marketplace />
        <Gallery />
        <About />
        <Footer />
    </>;
}

export default Home;