/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header} from "./header"
import "./layout.scss"
import { CoreUtils } from "./core-utils"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
interface LayoutProps {
}
// #endregion Interfaces

// #region Consts
//const { title } = useSiteMetadata();
// #endregion Consts

// #region Component
class Layout extends React.Component<LayoutProps, {}> {
  // #region Constructor
  constructor(props) {
    super(props);
    CoreUtils.bindAll(this);
  }
  // #endregion Constructor

  // #region Public Methods
  public render(): JSX.Element {
    const title2 = "test";
    return (
      <React.Fragment>
        <Header siteTitle = { title2 } />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <main>{ this.props.children }</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
  // #endregion Public Methods

  // #region Private Methods
  // #endregion Private Methods
}
// #endregion Component

// #region Export
export {
  Layout,
}
// #endregion Export

