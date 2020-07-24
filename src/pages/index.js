import React from "react";
import Layout from '../components/aside-layout';
import TechCards from '../components/tech-crush-cards';

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
      <section className="card-section">
        <h2>
          My most recent tech crushes are:
        </h2>
        <TechCards />
      </section>
    </Layout>
  )
}
