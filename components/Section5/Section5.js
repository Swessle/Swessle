import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionFour extends Component {
    render() {
        return (
            <Section>
                <ContactDiv>
                    <ContactText>
                        Contact
                    </ContactText>
                    
                        <Form action="https://www.enformed.io/op766nb7" method="POST">
                            <Flex textAlign='center' justifyContent='center'>
                                <Box>
                                    <FormInput name="name" type="text" placeholder="Name" required /> 

                                    <FormInput name="email" type="text" placeholder="Email" required title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"/>
                                    
                                    <FormTextArea name="message" placeholder="Comment" required ></FormTextArea>

                                    <Button type='submit'>Submit</Button>
                                </Box>
                            </Flex>
                        </Form>
                        
                </ContactDiv>
            </Section>

        )
    }
}

const Section = styled.div`
    background-color: #C0C0C0;
    height: 60vh;
    width: auto;
    marign: 0;
`
const ContactDiv = styled.div`

`
const Form = styled.form`
    text-align: center;
`
const ContactText = styled.h1`
    margin: 0;
    text-align: center;
    padding-top: 30px;
`

const FormInput = styled.input`
    font-weight:500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border:2px solid;
    width: 100%;
    padding: 13px;
    margin-bottom: 15px;
    box-sizing: border-box;
    outline:0;
`
const FormTextArea = styled.textarea`
    font-weight:500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border:2px solid;
    width: 100%;
    padding: 13px;
    margin-bottom: 15px;
    box-sizing: border-box;
    outline:0;
    height: 150px;
`
const Button = styled.button`
    height: 40px;
    width: 90px;
    background-color: #4630EB;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 700;
    margin: 0px 18px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #6250EE;
    }
`