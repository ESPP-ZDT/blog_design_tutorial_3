import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../Styles.css';

const FooterWrapper = styled.footer`
  background-color: #888;
  font-family: 'Brygada 1918', sans-serif;
  text-align: center;
  animation: fadein 2s;
  position: relative;
  bottom: 0;
  width: 100%;
  

  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
    
  }
`;


const Footer = () => (
  <FooterWrapper>
    <Row>
      <Col>
        <p>Copyright </p>
      </Col>
    </Row>
  </FooterWrapper>
);

export default Footer;
