import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default class SectionThree extends Component {
    render() {
        return (
            <Section>
                <FeatureDiv>
                    <FeaturesText>
                        Features
                    </FeaturesText>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
                    <Carousel
                        infinite
                        arrows
                    >

                        <CarouselDiv>
                            <div>test</div>
                        </CarouselDiv>

                        <CarouselDiv>
                            <div>test</div>
                        </CarouselDiv>

                        <CarouselDiv>
                            <div>test</div>
                        </CarouselDiv>
                    </Carousel>
                </FeatureDiv>
            </Section>

        )
    }
}

const Section = styled.div`
    background-color: white;
    height: 60vh;
    width: auto;
    marign: 0;
`
const FeatureDiv = styled.div`

`

const FeaturesText = styled.h1`
    text-align: center;
    margin: 0;
    padding-top: 30px;
    color: #000020;
    font-weight: 700;
    font-size: 35px;
`
const P = styled.p`
    text-align: center;
    opacity: 0.7;
    padding-bottom: 30px;
`

const CarouselDiv = styled.div`
    padding-top: 100px;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
`
