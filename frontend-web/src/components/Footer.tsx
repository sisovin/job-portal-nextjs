import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Job Portal</h5>
            <p>Your number one source for all things job-related.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" passHref>
                  <a className="text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="text-white">About</a>
                </Link>
              </li>
              <li>
                <Link href="/jobs" passHref>
                  <a className="text-white">Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@jobportal.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
