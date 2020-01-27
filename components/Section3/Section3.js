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
                    <Carousel
                        infinite
                        arrows 
                    >
                        
                        <CarouselDiv>
                            <Flex>
                                <Box>
                                    <img src='https://via.placeholder.com/250'></img>
                                </Box>
                                <Box>
                                    <Card>Test 1</Card>
                                </Box>
                            </Flex>
                        </CarouselDiv>

                        <CarouselDiv>
                            <Flex>
                                <Box>
                                    <img src='https://via.placeholder.com/250'></img>
                                </Box>
                                <Box>
                                    <Card>Test 2</Card>
                                </Box>
                            </Flex>
                        </CarouselDiv>

                        <CarouselDiv>
                            <Flex>
                                <Box>
                                    <img src='https://via.placeholder.com/250'></img>
                                </Box>
                                <Box>
                                    <Card>Test 3</Card>
                                </Box>
                            </Flex>
                        </CarouselDiv>
                    </Carousel>
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
const CarouselDiv = styled.div`
    
`

const Card = styled.div`
    background: white;
    width: 300px;
    height: 200px;
    margin: 0px 40px 0px 40px;
    text-align: center;
    box-shadow: -1px 15px 30px -12px black;
    
`