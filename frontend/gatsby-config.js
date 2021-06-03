require("dotenv").config({
  path: `.env`,
}); 

module.exports = {
  siteMetadata: {
    title: `Police Data Accessibility Project Blog`,
    siteUrl: `https://blog.pdap.io`,
    description: `We're building a source of truth for police data.`,
    pages: [
      {
        title: "Home",
        path: "https://pdap.io",
      },
      {
        title: "FAQ",
        path: "https://pdap.io/faq",
      },
      {
        title: "Docs",
        path: "https://docs.pdap.io"
      },
      {
        title: "Blog",
        path: "/"
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss"
  ],
};
