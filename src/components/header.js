import React, { Component } from 'react';
import headerStyles from './header.module.css';
import { Link } from 'gatsby';

export default class Header extends Component {
    render() {
        return (
            <header className={headerStyles.header}>
                <h1 className={headerStyles.title}>You Need a NAP</h1>
                <Link to="/resume">Go To Resume</Link>
            </header>
        )
    }
}
