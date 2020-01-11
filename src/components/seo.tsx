/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { CoreUtils } from "./core-utils"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
interface SEOProps {
  title: string,
}

interface SEOState {
  description?: string,
  lang?:        string,
  meta:         Object[],
  title:        string,
}
// #endregion Interfaces

// #region Component
class SEO extends React.Component<SEOProps, SEOState> {
  // #region Constructor
  constructor(props) {
    super(props)

    this.state = {
      description: "",
      lang:        "en",
      meta:        [],
      title:       "",
    };

    CoreUtils.bindAll(this);
  }
  // #endregion Constructor

  // #region Public methods
  public componentDidMount(): void {
    this._getData();
  }

  public render(): JSX.Element {

    //const { description, lang, title, meta } = useSiteMetadata();

    //const metaDescription = description;

    return (
      <div></div>
      // <Helmet>
      //     <meta charSet="utf-8" />
      //     <title>This is a test</title>
      // </Helmet>
    );
    // return (
    //   <Helmet
    //     htmlAttributes={{
    //       lang,
    //     }}
    //     title={title}
    //     titleTemplate={`%s | ${site.siteMetadata.title}`}
    //     meta={[
    //       {
    //         name: `description`,
    //         content: metaDescription,
    //       },
    //       {
    //         property: `og:title`,
    //         content: title,
    //       },
    //       {
    //         property: `og:description`,
    //         content: metaDescription,
    //       },
    //       {
    //         property: `og:type`,
    //         content: `website`,
    //       },
    //       {
    //         name: `twitter:card`,
    //         content: `summary`,
    //       },
    //       {
    //         name: `twitter:creator`,
    //         content: site.siteMetadata.author,
    //       },
    //       {
    //         name: `twitter:title`,
    //         content: title,
    //       },
    //       {
    //         name: `twitter:description`,
    //         content: metaDescription,
    //       },
    //     ].concat(meta)} />
    // );
  }
  // #endregion Public Methods

  // #region Private Methods
  private _getData(): void {
    // this.setState({

    // });
  }
  // #endregion Private Methods
}
// #endregion Component

// #region Export
export {
  SEO,
}
// #endregion Export

