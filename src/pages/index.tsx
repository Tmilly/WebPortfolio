import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { ImageExample } from "../components/image"
import { SearchEngineOptimizer } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
// #endregion Interfaces

// #region Component
export default function IndexPage(): JSX.Element {
  const { title } = useSiteMetadata();
  return (
    <Layout siteTitle = { title }>
      <SearchEngineOptimizer title= { "Home" } />
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
// #endregion Component
