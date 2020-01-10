import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import Layout from "../components/Layouts/Layout";
import SectionOne from "../components/Section1/Section1"


export default class index extends Component {
    render() {
        return (
            <Layout>
                <SectionOne/>
            </Layout>
        )
    }
}