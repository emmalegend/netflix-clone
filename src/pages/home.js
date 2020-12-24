import React from 'react';
import { FaqContainer } from './containers/Faqs';
import { FooterContainer } from './containers/Footer';
import {JumbotronContainer} from './containers/Jumbotron';

const Home = () => {
    return (
        <>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    )
}

export default Home
