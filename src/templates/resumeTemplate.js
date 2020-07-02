import React from 'react';
import Layout from '../components/main-layout';
import resumeTemplateStyles from './resumeTemplate.module.css';
import resume from '../../static/Resume-2020.pdf';

export default function Page ({ data }) {
    console.log(data);
    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
    return (
        <Layout>
            <section className={ resumeTemplateStyles.contactHeading }>
                <h1 className={ resumeTemplateStyles.h1 }>{ frontmatter.title }</h1>
                <div className={ resumeTemplateStyles.headerInfoText }>{ frontmatter.website }</div>
                <div className={ resumeTemplateStyles.headerInfoText }>{ frontmatter.email }</div>
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