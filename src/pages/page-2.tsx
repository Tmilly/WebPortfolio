import { Link } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SearchEngineOptimizer } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// #region Interfaces
// #endregion Interfaces

// #region Component
export default function SecondPage(): JSX.Element {
  const { title } = useSiteMetadata();
  return (
    <Layout siteTitle = { title }>
      <SearchEngineOptimizer pageTitle = { "Page two" } />
      <h1>Hi from the second page</h1>
      <p> Welcome to page 2</p>
      <Link to = { "/" }>Go back to the homepage</Link>
    </Layout>
  );
}
// #endregion Component
