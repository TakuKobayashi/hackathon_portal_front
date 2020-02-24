import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Iframe from "react-iframe";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Bio from "../components/bio"
import PostCard from "../components/postCard";

// import "../utils/global.scss"
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  //const posts = []
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Posts"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      <header className="page-head">
        <h2 className="page-head-title">
          {data.site.siteMetadata.description}
        </h2>
      </header>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <Iframe
            src="https://calendar.google.com/calendar/embed?src=jtmjds9ff5nh5365ne7se1spbg%40group.calendar.google.com&ctz=Asia%2FTokyo"
            style="border: 0"
            width="600"
            height="450"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </article>
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
