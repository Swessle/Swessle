import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionOne extends Component {
    render() {
        return (
            <Section>
                <HeadDiv>
                    <HeaderText>Modern Website Design</HeaderText>
                    <HeaderText>Made <SimpleSpan>Simple.</SimpleSpan></HeaderText>
                    <Button>Learn More</Button> <Button>Contact</Button>
                </HeadDiv>
            </Section>
        )
    }
}


const Section = styled.section`
    height: 100vh;
    width: auto;
    background-color: lightgray;
`

const HeadDiv = styled.div`
    padding-top: 160px;
    padding-left: 60px;
`

const HeaderText = styled.h1`
    color: black;
    font-weight: 700;
    font-size: 80px;
`

const SimpleSpan = styled.span`
    color: blue;
`

const Button = styled.button`
    width: 130px;
    height: 40px;
`

