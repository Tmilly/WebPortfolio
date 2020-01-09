import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { CoreUtils } from "./core-utils";

// #region Interfaces
export interface HeaderProps {
  siteTitle: string;
}

// #endregion Interfaces

// #region Component
export class Header extends React.Component<HeaderProps, undefined> {
  // #region constructor
  constructor(props: HeaderProps) {
    super(props);

    CoreUtils.bindAll(this)
  }
  // #endregion constructor

  // #region Public Methods
  public render(): JSX.Element {
    return (
      <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {this.props.siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    );
  }
  // #endregion Public Methods

  // #region Private Methods
  // #endregion Private Methods
}

// #endregion Component
