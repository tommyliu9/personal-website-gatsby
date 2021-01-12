import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import pinch from 'assets/illustrations/pinch.png';
import rbc from 'assets/illustrations/RBC.png';
import interac from 'assets/illustrations/interac.png';

import {Thumbnail } from './styles';

export const Experiences = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <Container>
    <h1>Experiences </h1>
    
        <h2>Pinch </h2>
        <h3>
            Co-founder and Developer
        </h3>
        <Thumbnail>
        <img src={pinch} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>



        <h2>RBC </h2>
        <h3>
            Software Developer Intern
        </h3>
        <Thumbnail>
        <img src={rbc} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>


        <h2>Interac </h2>
        <h3>
            Software Developer Intern
        </h3>
        <Thumbnail>
        <img src={interac} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>

    </Container>
  );
};
