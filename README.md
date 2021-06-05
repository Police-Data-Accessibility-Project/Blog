PDAP Blog
===

# Quickstart
1. If you don't have yarn installed, run `yarn` in the `frontend` and `backend` directories.
2. Run [PostgrSQL](https://www.postgresql.org/) locally.
3. Use the `.env.example` file, renaming it to `.env` with your own information.
4. Run `yarn develop` in the `backend` then the `frontend`.
5. If your strapi admin panel spins without loading, try deleting your `backend/build` folder and `backend/.cache` and run `yarn develop` again forcing a rebuild.

# What's this?
Our blog built off of the [Gatsby + Strapi Template](https://strapi.io/starters/strapi-starter-gatsby-blog)

# Customizations:
* Removed UIKit and used TailwindCSS in its place
* Copied the header / nav from the main [PDAP.io](https://github.com/Police-Data-Accessibility-Project/PDAP.io) site
