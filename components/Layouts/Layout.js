import React from "react"
import Head from "next/head"
import Navbar from "../Navbar/Navbar"
import GlobalStlye from "../GlobalTheme"


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Swessle</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <meta name="description" content="ArtNeal" />
                <link href="https://fonts.googleapis.com/css?family=Raleway:500,700&display=swap" rel="stylesheet"></link>
            </Head>
            <GlobalStlye/>
            <Navbar></Navbar>
            {children}
        </>
    )
}