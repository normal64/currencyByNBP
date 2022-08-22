import React from 'react'
import Head from "next/head"
import InfoapiStyles from "../styles/Infoapi.module.scss"
const Api = () => {
    return (
        <>
        <Head>
                <title>Api </title>
                </Head>
            <div className={InfoapiStyles.textContainer}>
                <p><a href="#" className={InfoapiStyles.apiadr}>http://api.nbp.pl/</a></p>
            </div>
        </>
    )
}

export default Api
