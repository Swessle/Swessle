import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionTwo extends Component {
    render() {
        return (
            <Section>
                <ServiceHeader>Services</ServiceHeader>
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
    background-color: #C0C0C0;
    height: 50vh;
    width: auto;
    padding-bottom: 30px;
`

const ServiceHeader = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 50px;
`

const Card = styled.div`
    background: white;
    width: 300px;
    height: 200px;
    margin: 0px 40px 0px 40px;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    
`

