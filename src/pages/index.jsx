import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home1/Banner";
import Service from "../section/home1/Service";
import About from "../section/home1/About";
import Service2 from "../section/home1/Service2";
import Funfact from "../section/home1/Funfact";
import ChooseUs from "../section/home1/ChooseUs";
import Service3 from "../section/home1/Service3";
import Project from "../section/home1/Project";
import Work from "../section/home1/Work";
import Pricing from "../section/home1/Pricing";
import Teams from "../section/home1/Teams";
import Clients from "../section/home1/Clients";
import Testimonial from "../section/home1/Testimonial";
import News from "../section/home1/News";


function Home1() {
    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <Banner />
                <Service />
                <About />
                <Service2 />
                <Funfact />
                <ChooseUs />
                <Service3 />
                <Project />
                <Work />
                <Pricing />
                <Teams />
                <Clients />
                <Testimonial />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home1;