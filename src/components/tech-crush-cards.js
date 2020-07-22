import React from 'react';
import techCardsStyles from './tech-crush-cards.module.css';

export default function TechCards () {
    const techArray = [
        {
            title:'Vue',
            description: 'Vue is great',
            backgroundImage: '/vue-282497.png',
        },
        {
            title:'Gatsby',
            description: 'Gatsby is React and GraphQL. It is great.',
            backgroundImage: '/gatsby.png',
        },
        {
            title:'Accessibility',
            description: 'Accessibility is great',
            backgroundImage: '/a11y.png',
        },
        {
            title:'CSS Grid',
            description: 'CSS Grid is great',
            backgroundImage: '/grid.svg',
        },
        {
            title:'Imposter Syndrome',
            description: 'Imposter Syndrome is not great',
            backgroundImage: '/imposter.svg',
        },
    ];

    return (
        <div className={techCardsStyles.cardRow}>
          <ul className={techCardsStyles.cardHolder}>
            {techArray.map(tech => <li className={techCardsStyles.card} style={{backgroundImage: `url(${tech.backgroundImage})`}}>
                    <div className={techCardsStyles.cardInner}>
                        <h3 className={techCardsStyles.cardHeader}>{tech.title}</h3>
                        <p className={techCardsStyles.cardText}>{tech.description}</p>
                    </div>
                </li>
            )}
          </ul>
          </div>
    );
}
