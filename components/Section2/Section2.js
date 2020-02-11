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
                        <Card>
                            <div>
                                <CardHeader>Basic</CardHeader>
                                <CardPrice>$750+</CardPrice>
                            </div>
                            <CardList>
                                <ListItem>Styling</ListItem>
                                <ListItem>HTML or React</ListItem>
                                <ListItem>Lorem ipsum</ListItem>
                            </CardList>
                        </Card>
                    </Box>
                    <Box>
                        <Card>
                            <div>
                                <CardHeader>Custom</CardHeader>
                                <CardPrice>$1500+</CardPrice>
                            </div>
                            <CardList>
                                <ListItem>Styling</ListItem>
                                <ListItem>HTML or React</ListItem>
                                <ListItem>Lorem ipsum</ListItem>
                            </CardList>
                        </Card>
                    </Box>
                </Flex>
            </Section>

        )
    }
}

const Section = styled.div`
    background-color: #F3F3F3;
    height: 60vh;
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

const Card = styled.article`
    --radius: 10px;
    border-radius: var(--radius);
    box-shadow: 0 0 55px rgba(80,80,80,0.25);
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const CardHeader = styled.h2`
    margin-bottom: -0.5em;
`

const CardPrice = styled.h1`
    color: #4630EB;
`

const CardList = styled.ul`
    display: grid;
    padding: 1em 5em;
    grid-row-gap: 0.6em;
    justify-content: space-around;
`
const ListItem = styled.li`
    list-style: none;
`
