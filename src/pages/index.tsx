import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { ImageExample } from "../components/image"
import { SEO } from "../components/seo"
import { CoreUtils } from "../components/core-utils"

// #region Interfaces
// #endregion Interfaces

// #region Component
export default class IndexPage extends React.Component<{}, {}> {
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
        <SEO title= { "Home" } />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <ImageExample />
        </div>
        <Link to = { "/page-2/" } >Go to page 2</Link>
      </Layout>
    );
  }
  // #endregion Public Methods

  // #region Private Methods
  // #endregion Private Methods
}
// #endregion Component
