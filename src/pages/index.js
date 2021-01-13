import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects,Music } from 'components/landing';
import { Experiences } from 'components/landing/Experiences';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Experiences/>

    <Projects />
    <Skills />
    <Music/>
    <Contact />
  </Layout>
);
