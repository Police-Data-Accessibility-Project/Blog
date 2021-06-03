import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import Sidebar from "../components/sidebar"

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="px-10 flex flex-col lg:flex-row">
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
          <Sidebar />
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }, sort: {order: DESC, fields: publishedAt} ) {
      edges {
        node {
          strapiId
          slug
          title
          description
          content
          publishedAt
          updated_at
          category {
            name
            slug
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
