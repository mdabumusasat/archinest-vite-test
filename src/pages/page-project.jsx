import React from "react";
import Layout from '../layouts/Layout';
import ProjectGrid from "../section/ProjectGrid";
import PageTitle from "../section/PageTitle";

 function PageProject() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Our Projects" />
                <ProjectGrid />
            </Layout>
        </div>
        </>
    )
}
export default PageProject