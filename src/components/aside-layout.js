import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import Aside from './aside';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rest for your weary web.</title>
            </Helmet>
            <Header />
            <div id="actions">
                {/* Include actions*/}
            </div>
            <main>
                {children}
            </main>
            <Aside></Aside>
            <Footer />
        </Fragment>
    )
}
