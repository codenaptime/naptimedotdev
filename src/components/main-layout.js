import React, { Fragment } from 'react';
import Header from './header';

export default function Layout({ children }) {
        return (
            <Fragment>
                <Header />
                <main>
                { children }</main>
                <footer></footer>
            </Fragment>
        )
}
