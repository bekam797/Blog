import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Template = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <Link to="/">go back</Link>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          posted by
          {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Template;
