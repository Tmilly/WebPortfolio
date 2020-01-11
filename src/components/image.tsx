import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { CoreUtils } from "./core-utils";
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

function placeHolderImage(): any {
  const image = usePlaceHolderImage();
  return null;
}

// #region Component
class ImageExample extends React.Component<{}, {}> {
  // #region Constructor
  constructor(props) {
    super(props);
    CoreUtils.bindAll(this);
  }
  // #endregion Constructor

  // #region Public Methods
  public render(): JSX.Element {
    return (
      //<Img fluid = { placeHolderImage() } />
      <div></div>
    );
  }
  // #endregion Public Methods

  // #region Private Methods
  // #endregion Private Methods
};
// #endregion Component

// #region Export
export {
  ImageExample,
}
// #endregion Export
