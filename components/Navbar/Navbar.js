import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"
import Link from "next/link"
import { StickyContainer, Sticky } from "react-sticky"


export default class Navbar extends Component {
    render() {
        return (
            <StickyContainer>
                
                <Nav>
                    <Flex justifyContent="space-between">
                        <Box pl={10}>
                            <Image src={"https://cdn.discordapp.com/attachments/599658324174307333/671515008202440774/swesslelogo.png"}></Image>
                        </Box>
                        <Box pr={10}>
                            <NavList>

                                <Link href="#">
                                    <NavLink>Services</NavLink>
                                </Link>



                                <Link href="#">
                                    <NavLink>Portfolio</NavLink>
                                </Link>
                                
                                <Link href="#">
                                    <NavLink>Features</NavLink>
                                </Link>



                                <Link href="#">
                                    <Button>Contact</Button>
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
    height: 64px;
	z-index: 9;
    position: relative;
    padding-top: 2px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
    margin-top: 10px;
	list-style-type: none;
	padding: 0px !important;
`;


const NavLink = styled.a`
	margin: 0px 18px;
	color: #000020;
	cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    
    
`;

// const Swessle = styled.h1`
//     margin-top: 15px;
//     margin-left: 18px;
//     color: #000020;
// 	font-size: 27px;
// `

const Image = styled.img`
    height: auto;
    width: auto;
    margin-left: 18px;
    margin-top: 10px;
`

const Button = styled.button`
    height: 40px;
    width: 90px;
    background-color: #4630EB;
    text-align: center;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 700;
    margin: 0px 18px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #6250EE;
    }
`
