import React from 'react';
import OptForm from '../components/opt-in/index';
import Feature from '../components/feature/index';
import { FaqContainer } from '../containers/Faqs';
import { FooterContainer } from '../containers/Footer';
import HeaderContainer from '../containers/Header';
import {JumbotronContainer} from '../containers/Jumbotron';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, Tv Programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch Anywhere, Cancel Anytime</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your Email to Create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    )
}

export default Home
