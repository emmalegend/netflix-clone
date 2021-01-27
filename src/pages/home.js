import React from 'react';
import {OptIn, Feature} from '../components';
import { FaqContainer, FooterContainer, HeaderContainer,JumbotronContainer } from '../containers';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, Tv Programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch Anywhere, Cancel Anytime</Feature.SubTitle>
                    <OptIn>
                        <OptIn.Input placeholder="Email Address"/>
                        <OptIn.Button>Try it Now</OptIn.Button>
                        <OptIn.Text>Ready to watch? Enter your Email to Create or restart your membership</OptIn.Text>
                    </OptIn>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    )
}

export default Home
