import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Flex, Box } from "reflexbox"

export default class SectionFour extends Component {
    render() {
        return (
            <Section>
                <ContactDiv>
                    <ContactText>
                        Contact
                    </ContactText>

                    <form>
                        <div>
                            <label for="name">Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email"  aria-describedby="emailHelp" />
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea rows="5" ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </ContactDiv>
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
const ContactDiv = styled.div`

`

const ContactText = styled.h1`
    margin: 0;
    text-align: center;
    padding-top: 30px;
`