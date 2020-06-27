import React from 'react';
import Layout from '../components/main-layout';
import pageTemplateStyles from './page.module.css';

export default function Page ({ data }) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { html, frontmatter } = markdownRemark;

    console.log(pageTemplateStyles);
    return (
        <Layout>
            <section id="contact-heading">
                <h1 className={pageTemplateStyles.h1}>{frontmatter.title}</h1>
                <div className={pageTemplateStyles.headerInfoText}>{frontmatter.website}</div>
                <div className={pageTemplateStyles.headerInfoText}>{frontmatter.email}</div>
            </section>
            <section dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const resumeBody = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        id
        html
        frontmatter {
            website
            title
            email
        }
    }
}`;