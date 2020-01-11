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
interface SearchEngineOptimizerProps {
  title:       string,
}
// #endregion Interfaces

// #region Component
export const SearchEngineOptimizer: FunctionComponent<SearchEngineOptimizerProps> = (props) => {
  const { author, description } = useSiteMetadata();
  const meta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: props.title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: props.title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ]
  return (
    <Helmet
      title          = { props.title }
      titleTemplate  = {`%s | ${props.title}`}
      meta           = { meta.concat(meta) } />
  );
}
// #endregion Component

