import { TwitterTimelineEmbed } from 'react-twitter-embed';
import React from 'react';

export default function TwitterFeed (params) {
    return (
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="codenaptime"
            options={{height: 400, width: '100%'}}
            noHeader={true}
            noFooter={true}
            noBorders={true}
            noScrollbar={true}
        />
    );
};
