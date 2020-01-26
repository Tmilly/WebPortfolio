import React from "react"
import { Layout } from "../components/layout"
import { SearchEngineOptimizer } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
// #endregion Interfaces

// #region Component
export default function IndexPage(): JSX.Element {
  const { title } = useSiteMetadata();
  return (
    <Layout siteTitle = { title }>
      <SearchEngineOptimizer pageTitle= { "Home" } />
      <h1>test</h1>
    </Layout>
  );
}
// #endregion Component
