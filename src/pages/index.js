import React from "react";
import Layout from '../components/main-layout';

export default function Home() {
  return (
    <Layout>
      <section>
        <h1>Welcome to my site!</h1>
        <p>Currently this is under construction, but I want to share a little bit about myself.</p>
        <p>
          I consider myself a "Swiss Army Developer".
          I've done a lot of things, can talk about nearly anything front end to some degree,
          and have dabbled in a wide variety of web technologies. I think everything is interesting and want to try it all.
          I'm not the"guru" on any one thing, but I'm always willing to lend a hand and teach whatever I can.</p>
        <p>
          I've taken the lead as a front end developer at a .NET shop and gotten a team going on multiple
          different Vue projects in less than a year through group teaching, one-on-one coding, and setting up an
          easy-to-use development environment for projects to come so that anyone can come in and contribute on day one.
        </p>
      </section>
      <section>
        <h2>
          My most recent tech crushes are:
        </h2>
        <ul>
          <li>Vue</li>
          <li>Gatsby (React and GraphQL)</li>
          <li>CSS Grid (not to spite flexbox)</li>
          <li>Hand-coding SVGs (glutton for punishment?)</li>
          <li>Imposter Syndrome</li>
        </ul>
      </section>
    </Layout>
  )
}
