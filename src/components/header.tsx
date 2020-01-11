import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

// #region Interfaces
interface HeaderProps {
  siteTitle: string;
}
// #endregion Interfaces

// #region Component
export const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            {props.siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}
// #endregion Component
