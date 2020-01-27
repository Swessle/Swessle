import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionTwo extends Component {
    render() {
        return (
            <Section>
                <ServiceHeader>Services</ServiceHeader>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                <Flex textAlign="center" justifyContent="center">
                    <Box>
                        <Card>Basic</Card>
                    </Box>
                    <Box>
                        <Card>Custom</Card>
                    </Box>
                </Flex>
            </Section>

        )
    }
}

const Section = styled.div`
    background-color: #F3F3F3;
    height: 50vh;
    width: auto;
    padding-bottom: 50px;
`

const ServiceHeader = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    color: #000020;
    font-weight: 700;
    font-size: 40px;
`
const P = styled.p`
    text-align: center;
    opacity: 0.7;
    padding-bottom: 30px;
`

const Card = styled.div`
    background: white;
    width: 300px;
    height: 200px;
    margin: 0px 40px 0px 40px;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
`

