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
                    
                        <Form>
                            <Flex textAlign='center' justifyContent='center'>
                                <Box>
                                    <FormInput name="name" type="text" placeholder="Name" /> 

                                    <FormInput name="email" type="text" placeholder="Email" />
                                    
                                    <FormTextArea name="text" placeholder="Comment"></FormTextArea>

                                    <Button>Contact</Button>
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