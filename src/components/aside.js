import React from 'react';
import TwitterContainer from './twitter-feed';

export default function Aside({ children }) {
    return(
        <aside>
            <h2>My tweets for <a href="https://twitter.com/codenaptime">@codenaptime</a></h2>
            <TwitterContainer />
            { children }
        </aside>
    );
};
