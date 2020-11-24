import React from 'react';
import {Inner,Container,Title,SubTitle,Image,Pane} from './styles/jumbo';

export default function Jumbotron  ({children, direction = 'row', ...restProps})  {
    return (
        <Inner direction={direction}>
           {children} 
        </Inner>
    )
}



Jumbotron.Container = function JumbtronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbtronPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.SubTitle = function JumbtronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Title = function JumbtronTitle({children, ...restProps}){
   return <Title {...restProps}>{children}</Title>
}
Jumbotron.Image = function JumbtronImage({...restProps}){
    return <Image {...restProps} />
}

