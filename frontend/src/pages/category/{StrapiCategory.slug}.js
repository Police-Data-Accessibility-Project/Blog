import React from "react";
import { graphql, Link } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar"

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }, sort: {order: DESC, fields: publishedAt}
    ) {
      edges {
        node {
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
                gatsbyImageData(width: 660)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30)
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <Layout seo={seo}>
    <div id="article-container" className="px-10  py-5 ">
        
        <div id='breadcrumbs' className="flex justify-between">
          <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">&lt; Back </Link>
          <h1 className="uppercase text-4xl font-bold text-accent mr-10">{category}</h1>
        </div>
        <div className="px-10 flex flex-col lg:flex-row">
          <ArticlesComponent articles={articles} />
          <Sidebar mt={"md:top-32 mt-8"} />
      </div>
    </div>
    </Layout>
  );
};

export default Category;
