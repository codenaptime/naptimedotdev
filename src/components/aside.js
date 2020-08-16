import React from 'react';
import TwitterContainer from './twitter-feed';

export default function Aside({ children }) {
    return (
        <aside>
            <TwitterContainer />
            {children}
        </aside>
    );
};
