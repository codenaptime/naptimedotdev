import React, { Component } from 'react';
import headerStyles from './header.module.css';
import { Link } from 'gatsby';

export default class Header extends Component {
    render() {
        return (
            <header className={headerStyles.header}>
                <Link className={headerStyles.siteLink} to="/">
                    <img src="/snooze.svg" alt="Website icon" />
                    <div className={headerStyles.titleTag}>
                        <h1 className={headerStyles.headerOne}>naptime.dev</h1>
                        <span>Rest for your weary web</span>
                    </div>
                </Link>
                <nav className={headerStyles.headerNav}>
                    <ul>
                        <Link to="/resume">Go To Resume</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}
