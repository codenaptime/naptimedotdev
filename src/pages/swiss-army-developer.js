import React from "react";
import Layout from '../components/main-layout';
import SwissArmy from '../components/swiss-army.js';

export default function Home({ children }) {
  return (
    <Layout>
      <SwissArmy></SwissArmy>
    </Layout>
  )
}
