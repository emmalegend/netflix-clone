import React from 'react'
import Header from '../components/header';
import * as Routes from '../constants/routes';
import logo from '../logo.svg'

const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.HOME} alt="Netflix" src={logo}/>
                <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
