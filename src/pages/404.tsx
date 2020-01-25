import React from "react"
import { Layout } from "../components/layout"
import { SearchEngineOptimizer } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata";

// #region Interfaces
// #endregion Interfaces

// #region Component
export default function NotFoundPage(): JSX.Element {
  const { title, description, author } = useSiteMetadata();
  return (
    <Layout siteTitle = { title } >
      <SearchEngineOptimizer pageTitle = { "404: Not Found" }/>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  );
};
// #endregion Component
