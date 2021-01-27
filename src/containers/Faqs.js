import React from 'react';
import faqsData from '../fixtures/faqs.json';
import {Accordion} from '../components';
import OptForm from '../components/opt-in';

const FaqContainer  = () => {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) =>(
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Input placeholder="Email Address"/>
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your Email to Create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}

export default FaqContainer;