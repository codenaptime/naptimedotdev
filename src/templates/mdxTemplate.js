import React from 'react';
import Layout from '../components/aside-layout';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from "gatsby";

export default function Page({ data }) {
    const { mdx: { body, frontmatter } } = data;
    return (
        <Layout>

            <div id="blog">
                <section id="top-section">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.description}</h2>
                </section>
                <section>
                    <MDXProvider>
                        <MDXRenderer components={Link}>
                            {body}
                        </MDXRenderer>
                    </MDXProvider>
                </section>
            </div>
        </Layout>
    );
}

// issue: pulling in the same MDX (resume) every time
export const data = graphql`
  query MdxQuery($pathSlug: String!) {
    mdx(slug: {eq: $pathSlug}) {
      id
      body
      slug
      frontmatter {
        title
        description
      }
    }
  }`;