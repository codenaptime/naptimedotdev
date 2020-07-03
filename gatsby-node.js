const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if(node.internal.type === 'MarkdownRemark') {
        
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        console.log(slug);
        createNodeField({node, name: 'slug', value: slug});
    }
  }

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const nodeSlug = node.fields.slug;
      const templatePath = nodeSlug === '/resume/' ?
        './src/templates/resumeTemplate.js' : './src/templates/mdTemplate.js';
      const pageTemplate = path.resolve(templatePath);
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  }