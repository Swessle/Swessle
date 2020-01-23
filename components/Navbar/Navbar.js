import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"
import Link from "next/link"
import { StickyContainer } from "react-sticky"

export default class Navbar extends Component {
    render() {
        return (
            <StickyContainer>
                <Nav>
                    <Flex justifyContent="center">
                        <Box>
                            <NavList>

                                <Link href="#">
                                    <NavLink>Services</NavLink>
                                </Link>



                                <Link href="#">
                                    <NavLink>Portfolio</NavLink>
                                </Link>



                                <Link href="#">
                                    <NavLink>Contact</NavLink>
                                </Link>
                                

                            </NavList>
                        </Box>
                    </Flex>
                </Nav>
            </StickyContainer>
        );
    }
}

const Nav = styled.nav`
    width: 100%;
    height: 60px;
	z-index: 9;
    position: relative;
    padding-top: 2px;
    background-color: gray;
`;

const NavList = styled.ul`
	
	list-style-type: none;
	padding: 0px !important;
`;


const NavLink = styled.a`
	margin: 0px 20px;
	color: black;
	cursor: pointer;
    font-size: 20px;
    
    
`;
