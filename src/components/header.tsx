import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

// #region Interfaces
interface IHeaderProps {
  siteTitle: string;
}
// #endregion Interfaces

// #region Component
export const Header: FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header>
      <div>
        <h1>
          <div/>
        </h1>
      </div>
    </header>
  );
}
// #endregion Component
