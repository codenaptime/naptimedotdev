const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });
    createNodeField({ node, name: 'slug', value: slug });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
      query {
        allMdx {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);

  result.data.allMdx.edges.forEach(({ node }) => {
    let nodeSlug = node.slug;
    let templatePath = './src/templates/mdxTemplate.js';

    if (node.slug.indexOf('resume') >= 0) {
      templatePath = './src/templates/resumeTemplate.js';

      console.log(nodeSlug, node.slug, templatePath);
    }


    createPage({
      path: nodeSlug,
      component: path.resolve(templatePath),
      context: {
        pathSlug: nodeSlug,
      },
    });
  });
}