import React from 'react';
import Layout from '../components/main-layout';
import resumeTemplateStyles from './resumeTemplate.module.css';
import resume from '../../static/Resume-2020.pdf';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from "gatsby";

export default function Page({ data }) {
    console.log(data);
    const { mdx: { body, frontmatter } } = data;

    return (
        <Layout>
            <section className={resumeTemplateStyles.resume}>
                <div className={resumeTemplateStyles.resumeHeaderContainer}>
                    <h1 className={resumeTemplateStyles.h1}>{frontmatter.title}</h1>
                    <div className={resumeTemplateStyles.headerInfoText}>{frontmatter.website}</div>
                    <div className={resumeTemplateStyles.headerInfoText}>{frontmatter.email}</div>
                    <a className={resumeTemplateStyles.downloadLink} href={resume} download>Download Resume</a>
                </div>
            </section>

            <section className={resumeTemplateStyles.resume}>
                <MDXProvider>
                    <MDXRenderer components={Link}>
                        {body}
                    </MDXRenderer>
                </MDXProvider>
            </section>
        </Layout>
    )
}

export const resumeBody = graphql`
query {
    mdx(slug: {eq: "pages/resume"}) {
        body
        frontmatter {
            website
            title
            email
        }
    }
}`;