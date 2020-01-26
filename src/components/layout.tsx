import React, { FunctionComponent } from "react";
import { Footer } from "./footer";
import { Header} from "./header";

import "../assets/scss/app.scss";

// #region Interfaces
interface ILayoutProps {
  siteTitle: string;
  children:  JSX.Element[]
}
// #endregion Interfaces

// #region Component
export const Layout: FunctionComponent<ILayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Header siteTitle = { props.siteTitle } />
      <div className = {"o-layout"}>
        <main>{ props.children }</main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
// #endregion Component
