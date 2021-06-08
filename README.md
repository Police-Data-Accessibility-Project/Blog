PDAP Blog
===
Use `npm`, do NOT use `yarn`.

# Quickstart
1. If you don't have yarn installed, run `npm install` in the `frontend` and `backend` directories.
2. Run [PostgreSQL](https://www.postgresql.org/) locally.
3. Use the `.env.example` file, renaming it to `.env` with your own information (filling in your local PostgreSQL instance)
4. Run `npm run develop` in the `backend` then the `frontend` to rebuild a dev version.
5. If your strapi admin panel spins without loading, try deleting your `backend/build` folder and `backend/.cache` then rebuild.
6. If your gatsby frontend doesn't reference data appropriately, try deleting your `frontend/public` folder and `frontend/.cache` then rebuild.

# What's this?
Our blog built off of the [Gatsby + Strapi Template](https://strapi.io/starters/strapi-starter-gatsby-blog)

# Customizations:
* Removed UIKit and used TailwindCSS in its place
* Copied the header / nav from the main [PDAP.io](https://github.com/Police-Data-Accessibility-Project/PDAP.io) site
