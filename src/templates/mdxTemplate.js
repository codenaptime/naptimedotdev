import React from 'react';
import Layout from '../components/main-layout';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from "gatsby";

export default function Page({ data }) {
    const { mdx: { body, frontmatter } } = data;
    console.log(data);
    return (
        <Layout>

            <div id="blog">
                <section id="top-section">
                    <h1>Naptime Blog</h1>
                    <h2>{frontmatter.title}</h2>
                    <description>{frontmatter.description}</description>
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

export const resumeBody = graphql`
query MdxQuery {
    mdx(slug: {eq: "pages/blog/blog-1"}) {
      body
      slug
      frontmatter {
          title
          description
      }
    }
}`;