import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  /* 
  // this is legacy from the starter template, it seems to split the articles into cols manually instead of using something like flexbox
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  */

  return (
      <div className="pt-2 w-full mr-5">
        <div>
          {articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__${article.node.slug}`}
              />
            );
          })}
        </div>
      </div>
  );
};

export default Articles;
