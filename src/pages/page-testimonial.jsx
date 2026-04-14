import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import Testimonials from "../section/Testimonials";

function TestimonialsPage() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Testimonials" />
                <Testimonials />
            </Layout>
        </div>
        </>
    )
}
export default TestimonialsPage