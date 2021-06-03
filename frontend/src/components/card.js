import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

{/* Helper Functions for this Component */}

function trim(s){ 
  return ( s || '' ).replace( /[^A-Za-z0-9 \n]+/g, '' ); 
}

function truncate(str) {
    return str.length > 100 ? trim(str).substring(0, 95) + "..." : str;
}

function date_format(date){
  var d = new Date(date);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var curr_date = d.getDate();
  var curr_month = d.getMonth();
  var curr_year = d.getFullYear();

  var curr_hour = d.getHours();
  var curr_min = d.getMinutes();
  console.log(curr_hour);

  var timezone = d.toString().match(/([A-Z]+[\+-][0-9]*)/)[1];

  // leading zero padding
  if (curr_hour.toString().length == 1) curr_hour = "0" + curr_hour;
  if (curr_min.toString().length == 1) curr_min = "0" + curr_min;

  // returns like 2 June 2021 - 1500
  return curr_date + ' ' + months[curr_month] + ' ' + curr_year + ' - ' + curr_hour + '' + curr_min;
}

const Card = ({ article }) => {
  console.log(article);

  
  return (
    <Link to={`/article/${article.node.slug}`} className="m-5">
      <div className=" w-full max-w-full md:flex shadow hover:shadow-lg" >
      
        <div className="h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden">
          
            <GatsbyImage
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
              image={article.node.image.localFile.childImageSharp.gatsbyImageData}
              alt={`Hero image`}
            />
          
        </div>

        <div className="w-full bg-primary border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8 divide-y" >
            <div>
              <div className="text-gray-900 font-bold text-xl mb-2">{article.node.title}</div>
              <p className="text-gray-700 text-base" >{truncate(article.node.description)}</p>
            </div>
            <div className="mt-5">
              <p className="mt-5 flex items-center mb-0">
                <Link to={`/category/${article.node.category.slug}`} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:shadow-lg">{article.node.category.name}</Link>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              {article.node.author.picture && (
                  <GatsbyImage
                    image={article.node.author.picture.localFile.childImageSharp.gatsbyImageData}
                    alt={`Picture of ${article.node.author.name}`}
                    style={{ borderRadius: "50%" }}
                  />
                )}
            </div>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{article.node.author.name}</p>
              <p className="text-gray-600">{date_format(article.node.publishedAt)}</p>
            </div>
          </div>
        </div> {/* end card body block */}
      </div> {/* end card block */}
    </Link>
  );
};

export default Card;
