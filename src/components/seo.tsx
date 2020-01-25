/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import Helmet from 'react-helmet'
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
interface ISearchEngineOptimizerProps {
  pageTitle:       string,
}
// #endregion Interfaces

// #region Component
export const SearchEngineOptimizer: FunctionComponent<ISearchEngineOptimizerProps> = (props) => {
  const { author, description, title } = useSiteMetadata();
  const meta = [
    {
      content: description,
      name: `description`,
    },
    {
      content: props.pageTitle,
      property: `og:title`,
    },
    {
      content: description,
      property: `og:description`,
    },
    {
      content: `website`,
      property: `og:type`,
    },
    {
      content: `summary`,
      name: `twitter:card`,
    },
    {
      content: author,
      name: `twitter:creator`,
    },
    {
      content: props.pageTitle,
      name: `twitter:title`,
    },
    {
      content: description,
      name: `twitter:description`,
    },
  ]
  return (
    <Helmet
      title          = { title }
      titleTemplate  = {`${title} | ${props.pageTitle}`}
      meta           = { meta.concat(meta) } />
  );
}
// #endregion Component

