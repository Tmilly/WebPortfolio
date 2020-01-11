import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { CoreUtils } from "../components/core-utils";

// #region Interfaces
// #endregion Interfaces

// #region Component
export default class SecondPage extends React.Component<{}, {}> {
  // #region Constructor
  constructor(props) {
    super(props);
    CoreUtils.bindAll(this);
  }
  // #endregion Constructor

  // #region Public Methods
  public render(): JSX.Element {
    return (
      <Layout>
        <SEO title = { "Page two" } />
        <h1>Hi from the second page</h1>
        <p> Welcome to page 2</p>
        <Link to = { "/" }>Go back to the homepage</Link>
      </Layout>
    );
  }
  // #endregion Public Methods

  // #region Private Methods
  // #endregion Private Methods
}
// #endregion Component
