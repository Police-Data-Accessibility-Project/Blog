import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Seo from "./seo";


const Layout = ({ children, seo }) => (
  
  <StaticQuery
    query={graphql`
        query siteMetadata {
          site {
            siteMetadata {
              title
              pages {
                title
                path
              }
            }
          }
        }
      `}
    render={(data) => (
      <div className="bg-secondary h-screen">
        <Seo seo={seo} />
        <Header pages={data.site.siteMetadata.pages}/>
        <main className="bg-secondary mt-20 ">{children}</main>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
