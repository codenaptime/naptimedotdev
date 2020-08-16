const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });
    console.log('SLUG in ONCREADTENODE', slug);
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

  // console.log(result.data.allMdx);
  result.data.allMdx.edges.forEach(({ node }) => {
    const nodeSlug = node.slug.slice(node.slug.indexOf('/'));
    const templatePath = nodeSlug.indexOf('resume') >= 0 ?
      './src/templates/resumeTemplate.js' : './src/templates/mdxTemplate.js';
    const pageTemplate = path.resolve(templatePath);
    console.log(`${node.slug} --- ${nodeSlug}`)
    console.log(`----- PATH: - ${templatePath}`);
    console.log(`----- TEMPLATE: - ${pageTemplate}`);
    createPage({
      path: nodeSlug,
      component: pageTemplate,
      context: {
        pagePath: nodeSlug,
      },
    })
  });
}