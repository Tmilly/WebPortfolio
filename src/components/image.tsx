import React, { FunctionComponent } from "react"
import Img from "gatsby-image"
import { usePlaceHolderImage } from "../hooks/use-placeholder-Image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

// #region Interfaces
// #endregion Interfaces

// #region Component
export const ImageExample: FunctionComponent = () => {
  return (
    <Img fluid = { usePlaceHolderImage() } />
  );
}
// #endregion Component
