import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/rock.png';
import fiji from 'assets/illustrations/fiji.png';
import music from 'assets/illustrations/producing.gif';

import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      
      <SkillsWrapper as={Container}>
      
        <Thumbnail>
          <img src={dev} alt="I’m Thomas and I’m a Software Engineer and MusicpP" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
           I'm an avid rock-climber and enjoy the outdoors. Love camp fire cooking and getting my hands dirty.
          </p>
          
        </Details>
      </SkillsWrapper>
      <SkillsWrapper as={Container}>
      
        
        <Details theme={theme}>
          <h1>Leadership</h1>
          <p>
            As a member of a diverse fraternity, I'm constantly interacting with different people from all over the world, learning new cultures & values.
          </p>
      
        </Details>
        <Thumbnail>
          <img src={fiji} alt="I’m Thomas and I’m a Software Engineer and MusicpP" />
        </Thumbnail>
      </SkillsWrapper>

      <SkillsWrapper as={Container}>
      
        <Thumbnail>
          <img src={music} alt="I’m Thomas and I’m a Software Engineer and MusicpP" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Music</h1>
          <p>
           I love music of all genres, however, as a music producer, I mainly produce electronic dance music.
          </p>
          
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
