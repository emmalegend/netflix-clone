import React from 'react';
import {Container, Input, Button, Text} from './styles/opt-in'

export default function OptForm({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput ({...restProps}) {
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="tryNow" />
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}