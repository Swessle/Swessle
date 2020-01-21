import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionFour extends Component {
    render() {
        return (
            <Section>
                <PortfolioDiv>
                    <PortfolioText>
                        Portfolio
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
    margin: 0;
    text-align: center;
    padding-top: 30px;
`