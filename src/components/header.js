import React from 'react';
import headerStyles from './header.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Header () {
    const { allFile: { nodes } } = useStaticQuery(graphql`
                    query {
                        allFile(filter: {relativeDirectory: {eq: "pages"}, extension: {eq: "js"}, name: {ne: "index"}}) {
                            nodes {
                            name
                            }
                        }
            }`
    );

    console.log(nodes);
        const links = nodes.map(node => {
            var nameWithoutDashes = node.name
                .replace(/-/g, ' ');

            return <Link to={`/${node.name}`}>{nameWithoutDashes}</Link>
        });
    return(
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
                    {/* {links} */}
                    <Link to="/resume">Go To Resume</Link>
                </ul>
            </nav>
        </header>
    );
};
