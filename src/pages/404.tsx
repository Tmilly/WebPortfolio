import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { CoreUtils } from "../components/core-utils";

// #region Interfaces
// #endregion Interfaces

// #region Component
export default class NotFoundPage extends React.Component<{}, {}>{
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
        <SEO title = { "404: Not Found" } />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Layout>
    );
  }
  // #endregion Public Methods
}
// #endregion Component
