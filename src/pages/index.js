/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1>posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            post by
            {post.node.frontmatter.date}
          </small>
          <Link to={post.node.frontmatter.path}>Read More</Link>
        </div>
      ))}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query BlogindexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;

export default BlogPage;
