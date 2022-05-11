import Head from 'next/head'
// import Getdata from "../components/GetData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../pages/navbar";
import FOOTER from "../pages/footer";
import styles from "../styles.module.css";
import Fastdelivery from '../public/Fastdelivery.jpg';
import Image from 'next/image'


function home() {
    return (
        <div>
            <Navbar />
            <Head>
                <title className="title" style={{paddingLeft: "20px"}}>Shopzilla</title>
                <link rel="icon" href="/Online-shop-logo.png" className="logo"/>
            </Head>
            <div className="row">
                <div className="column">
                    <Image alt="Next.js logo" src={Fastdelivery} className="image"/>
                </div>
                <div className="column mycenter">
                    <h1 className="title" style={{color:"cornflowerblue", marginTop:"100px", marginLeft:"100px"}}>
                        Welcome to Shopzilla
                    </h1>
                    <a type="button" className="btn  center" href='/Inventory' style={{marginLeft:"250px", marginTop:"100px", backgroundColor:"cornflowerblue", color:"white"}}>Inventory  &rarr;</a>
                </div>
            </div>

            <div className="container ">
                <FOOTER/>
            </div>
            <style jsx>{`
                     .column{
                        width: 570px;
                     }
                     .image{
                     height: 200px;
                     }
            `}</style>

        </div>
    );
}
export default home;