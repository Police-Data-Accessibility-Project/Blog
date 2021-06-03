import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/layout";
import Markdown from "react-markdown";
import Sidebar from "../../components/sidebar"

function date_format(date){
  var d = new Date(date);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();

  var curr_hour = d.getHours();
  var curr_min = d.getMinutes();

  var timezone = d.toString().match(/([A-Z]+[\+-][0-9]*)/)[1];

  // leading zero padding
  if (curr_hour.toString().length == 1) curr_hour = "0" + curr_hour;
  if (curr_min.toString().length == 1) curr_min = "0" + curr_min;

  // returns like 2 June 2021 - 1500
  return curr_date + ' ' + months[curr_month] + ' ' + curr_year + ' - ' + curr_hour + '' + curr_min;
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      publishedAt
      updated_at
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
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
`;

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout seo={seo}>
      <div id="article-container" className="px-10  py-5 ">
        <div id='breadcrumbs' className="">
          <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">&lt; Back </Link>
        </div>
        <div id='main' className = "mt-5 flex flex-col lg:flex-row">
          <div id="article-card" className="w-full md:w-3/4 shadow hover:shadow-lg lg:mr-5" >
            <div className=" bg-primary border border-gray-400  lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
              <h1 className="text-primary text-4xl font-bold mb-3 mt-3 pb-5 text-center">{article.title}</h1>
              <div className="flex items-center ml-10">
                <div className="w-10 h-10 rounded-full mr-4 ">
                  {article.author.picture && (
                      <GatsbyImage
                        image={article.author.picture.localFile.childImageSharp.gatsbyImageData}
                        alt={`Picture of ${article.author.name}`}
                        style={{ borderRadius: "50%" }}
                      />
                    )}
                </div>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{article.author.name}</p>
                  <p className="text-gray-600">Last Updated: {date_format(article.updated_at)} | Published: {date_format(article.publishedAt)}</p>
                </div>
              </div> {/* end writer section */}

              <div className="flex-none m-10  bg-cover text-center justify-items-center overflow-hidden rounded-2xl shadow-2xl">
                  <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    image={article.image.localFile.childImageSharp.gatsbyImageData}
                    alt={`Hero image`}
                  />
              </div> {/* end image section */}



              <div className = "mt-5 ml-10 mr-10 article-content">
                <Markdown source={article.content} escapeHtml={false} style={{}}/>
              </div>
              

            </div> {/* end card body */}
          </div> {/* end card */}

          <Sidebar />

        </div> {/* end main */}
      </div>
    </Layout>
  );
};

export default Article;
