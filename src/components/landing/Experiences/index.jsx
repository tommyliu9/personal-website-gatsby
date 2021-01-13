import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import pinch from 'assets/illustrations/pinch.png';
import rbc from 'assets/illustrations/RBC.svg';
import interac from 'assets/illustrations/interac.svg';
import {Thumbnail,ImageCard } from './styles';
import {Row,Col,CardImg} from 'reactstrap'
export const Experiences = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <Container>
    <h1>Experiences </h1>
        <Row>
            <Col xs="10">
                <h3>Pinch</h3>
            </Col>
            <Col >
                <h3>Toronto, Canada</h3>
            </Col>
        </Row>
        <Row>
            <Col xs="10">
                <h4>Co-Founder & Developer</h4>
            </Col>
            <Col >
                <h4>Sept. 2020 - PRESENT</h4>
            </Col>
        </Row>
        <Row >
            <Col xs="2">
                <ImageCard theme={theme}>
                    <CardImg src={pinch} width="100%"/>
                </ImageCard>
               
            </Col>
           <Col >
                <ul>
                    <li>
                    Pinch is a platform that is accessible anywhere in which restaurants can choose the delivery method they prefer whether that be couriers, self-delivery, pickup only, or free trackless delivery. 
                Stores can get in direct contact with couriers and search for couriers that fit their brand image.
                Pinch will allow stores to be able to take responsibility for their own page. Styling, customizing and editing it as they so choose. 
                They’d have the ability to track the progress of their orders as before, and have all of this is in the background while customers enjoy the delivery ecosystem without inflated pricing or commission fees. 
                    </li>
                    <li>
                        Responsible for designing application system architecture.
                    </li>

             
                </ul>
            </Col>
        
        </Row>


        <Row>
            <Col xs="10">
                <h3>RBC </h3>
            </Col>
            <Col >
                <h3>Toronto, Canada</h3>
            </Col>
        </Row>
        <Row>
            <Col xs="10">
                <h4>Software Developer Intern</h4>
            </Col>
            <Col >
                <h4>Aug. 2020 - Sept. 2020</h4>
            </Col>
        </Row>
        <Row >
            <Col xs="2">
                <img src={rbc} alt="I’m John and I’m a JAMStack engineer!" />
            </Col>
           <Col >
                <ul>  
                    <li>
                    Responsible for designing and building a real-time digital collaboration platform for wealth advisors.
                    </li>
                    <li>
                    Implemented a system to render and stream digital assets through the web using NodeJS, AWS S3, and Typescript.
                    </li>
                    <li>
                    Maintained and scaled application using Docker, Kubernetes with Openshift, and PCF.
                    </li>
                    <li>
                    Created live comment and chat feature using web-sockets & ReactJS.

                    </li>
                    <li>
                    Documented and tested the specification using OpenApi, Jest, and Selenium
                    </li>
                </ul>
            </Col>
        
        </Row>

        <Row>
            <Col xs="10">
                <h3>Interac </h3>
            </Col>
            <Col >
                <h3>Toronto, Canada</h3>
            </Col>
        </Row>
        <Row>
            <Col xs="10">
                <h4>Software Developer Intern</h4>
            </Col>
            <Col >
                <h4>Aug. 2019 - Dec. 2019</h4>
            </Col>
        </Row>
        <Row >
            <Col xs="2">
                <img src={interac} alt="I’m John and I’m a JAMStack engineer!" />
            </Col>
           <Col >
                <ul> 
                    <li>
                     Responsible for designing, building, and deploying a point-of-sale mobile application.

                    </li> 
                    <li>
                    Implemented Native Bluetooth, NFC & Camera functionality to a mobile app using React-Native and Flutter for Bluetooth, NFC, and QR scan & pay.

                    </li>
                    <li>
                    Built a notification server to deliver real-time push notifications to a mobile application using a webhook through NestJS, PostgreSQL, & Web-sockets.
                    
                    </li>
                    <li>
                    Created eployment process using Docker & Jenkins to AWS EC2 using Nginx.
                    </li>
                    <li>
                    Converted SOAP legacy system to REST using Typescript & OpenAPI.
                    </li>
                    <li>
                    Researched and designed POC hyper-ledger fabric use-cases for the existing system.
                    </li>
                </ul>
            </Col>
        
        </Row>

    </Container>
  );
};
