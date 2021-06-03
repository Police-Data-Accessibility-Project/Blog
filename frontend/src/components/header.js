import React from "react"
import Nav from "./nav"
import { Link } from "gatsby";
import * as headerStyles from "../assets/css/header.module.css"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../assets/pdap_full_lockup_final.svg"


export default function Header({ pages }) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__content}>
        <Link to="/">
          <Logo
            className={headerStyles.header__logo__image}
            title="PDAP Home"
          />
        </Link>
        {pages.length > 0 && <Nav pages={pages} />}
      </div>
    </header>
  )
}

Header.defaultProps = {
  pages: [],
}
