import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import {Row,Col} from 'reactstrap'
export const Music = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
        <Row>
        <Col xs="3">
        <iframe src="https://open.spotify.com/embed/playlist/4PRQPFOzkToOV2moRXawlS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Col>
        <Col xs="3">
        <iframe src="https://open.spotify.com/embed/playlist/4Yo2ra6bnTEJveU9KRQ6I1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Col>
        <Col xs="3">
        <iframe src="https://open.spotify.com/embed/playlist/1r9fBVXDD4A7nCJgmh1X9H" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Col>
        <Col xs="3">
        <iframe src="https://open.spotify.com/embed/playlist/0ZNTvv4kpAvYofaqwsk1Zw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Col>
        </Row>

        <Row>
        <Col xs="4">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/847491049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

        </Col>
        <Col xs="4">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/894268216&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </Col>
        <Col xs="4">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/942586147&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </Col>
        
        </Row>
    </Container>
  );
};
