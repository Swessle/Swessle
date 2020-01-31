import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layouts/Layout";
import SectionOne from "../components/Section1/Section1"
import SectionTwo from "../components/Section2/Section2"
import SectionThree from "../components/Section3/Section3"
import SectionFour from "../components/Section4/Section4"
import SectionFive from "../components/Section5/Section5"


export default class index extends Component {
    render() {
        return (
            <Layout>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
            </Layout>
        )
    }
}