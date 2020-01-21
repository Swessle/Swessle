import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionThree extends Component {
    render() {
        return (
            <Section>
                <FeatureDiv>
                    <FeaturesText>
                        Features
                    </FeaturesText>
                </FeatureDiv>
            </Section>

        )
    }
}

const Section = styled.div`
    background-color: lightgrey;
    height: 60vh;
    width: auto;
    marign: 0;
`
const FeatureDiv = styled.div`

`

const FeaturesText = styled.h1`
    margin: 0;
    text-align: center;
    padding-top: 30px;
`