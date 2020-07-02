import React from 'react'
import Layout from '../components/main-layout';

export default function Page({children}) {
return(
    <Layout>
        {children}
    </Layout>
);
}