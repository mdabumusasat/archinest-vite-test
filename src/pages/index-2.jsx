import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home2/Banner";
import Client from "../section/home2/Client";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import Service2 from "../section/home2/Service2";
import Service3 from "../section/home2/Service3";
import Features from "../section/home2/Features";
import Features2 from "../section/home2/Features2";
import Project from "../section/home2/Project";
import Teams from "../section/home2/Teams";
import Faqs from "../section/home2/Faqs";
import Testimonial from "../section/home2/Testimonial";
import News from "../section/home2/News";


function Home2() {
    return (
        <>
        <div className="page-wrapper">
            <Layout FooterStyle="two">
                <Banner />
                <Client />
                <About />
                <Service />
                <Service2 />
                <Service3 />
                <Features />
                <Features2 />
                <Project />
                <Teams />
                <Faqs />
                <Testimonial />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home2