PDAP Blog
===

# Quickstart
1. If you don't have yarn installed, run `yarn install` in the `frontend` and `backend` directories.
2. Run [PostgrSQL](https://www.postgresql.org/) locally.
3. Add an .env file like the following:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME= $your local user name
DATABASE_USERNAME= $your local user name
DATABASE_PASSWORD= $your local user password
```
4. Run `yarn develop` in the `backend` then the `frontend`.

# What's this?
Our blog built off of the [Gatsby + Strapi Template](https://strapi.io/starters/strapi-starter-gatsby-blog)

# Customizations:
* Removed UIKit and used TailwindCSS in its place
* Copied the header / nav from the main [PDAP.io](https://github.com/Police-Data-Accessibility-Project/PDAP.io) site
