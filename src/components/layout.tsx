/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header} from "./header"
import "./layout.scss"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
interface LayoutProps {
  siteTitle: string;
  children:  JSX.Element[]
}
// #endregion Interfaces

// #region Component
export const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Header siteTitle = { props.siteTitle } />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        <main>{ props.children }</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  );
}
// #endregion Component
