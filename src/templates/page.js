import React from 'react';
import Layout from '../components/main-layout';
import pageTemplateStyles from './page.module.css';
import resume from '../../static/Resume-2020.pdf';

export default function Page ({ data }) {
    console.log(data);
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    return (
        <Layout>
            <section className={ pageTemplateStyles.contactHeading }>
                <h1 className={ pageTemplateStyles.h1 }>{ frontmatter.title }</h1>
                <div className={ pageTemplateStyles.headerInfoText }>{ frontmatter.website }</div>
                <div className={ pageTemplateStyles.headerInfoText }>{ frontmatter.email }</div>
                <a href={ resume } download>Download Resume</a>
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