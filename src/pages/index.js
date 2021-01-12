import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { Experiences } from 'components/landing/Experiences';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Experiences/>
    <Skills />
    <Contact />
  </Layout>
);
