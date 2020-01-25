import React, {FunctionComponent} from 'react';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    )
}