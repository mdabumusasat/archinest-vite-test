import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/home2/About";
import Funfact from "../section/home1/Funfact";
import Service2 from "../section/home1/Service2";
import Testimonial from "../section/home2/Testimonial";
import Client from "../section/home2/Client";

function AboutUs() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="About Us" />
                <About />
                <Funfact />
                <Service2 />
                <Testimonial />
                <Client />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs