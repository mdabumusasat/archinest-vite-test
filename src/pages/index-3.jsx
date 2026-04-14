import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home3/Banner";
import Service from "../section/home3/Service";
import About from "../section/home3/About";
import Service2 from "../section/home3/Service2";
import Funfact from "../section/home3/Funfact";
import Project from "../section/home3/Project";
import Pricing from "../section/home3/Pricing";
import Features from "../section/home3/Features";
import Service3 from "../section/home3/Service3";
import Award from "../section/home3/Award";
import Testimonial from "../section/home3/Testimonial";
import Clients from "../section/home3/Clients";
import News from "../section/home3/News";


function Home3() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <Banner />
                <Service />
                <About />
                <Service2 />
                <Funfact />
                <Project />
                <Pricing />
                <Features />
                <Service3 />
                <Award />
                <Testimonial />
                <Clients />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home3