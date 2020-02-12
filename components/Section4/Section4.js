import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionFour extends Component {
    render() {
        return (
            <Section>
                <PortfolioDiv>
                    <PortfolioText>
                        Our Work
                    </PortfolioText>
                </PortfolioDiv>
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
const PortfolioDiv = styled.div`

`

const PortfolioText = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    color: #000020;
    font-weight: 700;
    font-size: 35px;
`