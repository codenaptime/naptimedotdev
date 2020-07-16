import React from 'react';

export default function Aside({ children }) {
    return(
        <aside>
            <h2>Follow Me!</h2>
            { children }
        </aside>
    );
};
