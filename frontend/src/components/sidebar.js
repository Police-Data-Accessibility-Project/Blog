import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const Sidebar = ({mt="md:top-28"}) => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
        <div className={"w-1/3 md:sticky md:max-h-80 bg-primary border border-gray-400  lg:border-gray-400 bg-white rounded p-4 justify-between leading-normal " + mt}>
            <h1 className="text-xl font-bold">Categories</h1>
            <ul className="divide-y">
                {data.allStrapiCategory.edges.map((category, i) => (
                    <li key={`category__${category.node.slug}`} className="pt-2 pb-2 uppercase hover:text-accent">
                        <Link to={`/category/${category.node.slug}`}>
                        {category.node.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )}
  />
);

export default Sidebar;
