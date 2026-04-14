import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import BlogDetails from "../section/BlogDetails";

export default function PageBlogDetails() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="News Details" />
                <BlogDetails />
            </Layout>
        </div>
        </>
    )
}
