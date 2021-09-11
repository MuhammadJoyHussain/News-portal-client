import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import GooglePlayStore from './../Svg/GooglePlayStore';
import ApplePlayStore from './../Svg/ApplePlayStore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div className="mt-5">
      <Container>
          <Row>
          <hr />
          <h3 className="mb-3">News Portal</h3>
            <Col md={4}>
              <p>Edition</p>
              <div className="d-flex">
                <input type="checkbox" class="form-check-input" />
                <p className="ms-2">Bangla</p>
              </div>
              <div className="d-flex">
                <input type="checkbox" class="form-check-input " />
                <p className="ms-2">English</p>
              </div>
            </Col>
            <Col md={4}>
              <FooterLink>
                <div>
                  <Link className="nav-link" to="/bangladesh">Bangladesh</Link>
                  <Link className="nav-link" to="/international">International</Link>
                  <Link className="nav-link" to="/sport">Sport</Link>
                  <Link className="nav-link" to="/business">Business</Link>
                </div>
                <div  className="ms-5">
                  <Link className="nav-link" to="/youth">Youth</Link>
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </div>
              </FooterLink>
            </Col>
            <Col md={4}>
              <RightFooter>
                <a className="nav-link">Advertise</a>
                <a className="nav-link">Term of Use</a>
                <a className="nav-link">Privacy Policy</a>
                <a className="nav-link">Contact Us</a>
              </RightFooter>
            </Col>
            <BottomFooter className="d-flex justify-content-between">
              <div className="social-icons float-md-end p-2">
                <p className="mb-3">Follow us</p>
                <a
                  href="https://facebook.com"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://iastagram.com"
                >
                  <AiOutlineInstagram />
                </a>
                <a href="https://youtube.com">
                  <AiOutlineYoutube />
                </a>
              </div>
              <div className="p-2">
                <p>Download mobile apps</p>
                <div className="d-flex">
                  <GooglePlayStore />
                  <br />
                  <ApplePlayStore />
                </div>
              </div>
            </BottomFooter>
          </Row>
        <CopyRight className="text-center">
          &copy; Copyright © 2021 News Portal. All Rights Reserved.
        </CopyRight>
      </Container>
    </div>
  );
};

export default Footer;

const FooterLink = styled.div`
  border-left: 1px solid #e2e2e2;
  margin-bottom: 10px;
  display: flex;
  a {
    color: black;
    font-size: 13px;
  }
`

const RightFooter = styled.div`
  border-left: 1px solid #e2e2e2;
  margin-bottom: 10px;
  a {
    color: black;
    font-size: 13px;
  }
`

const BottomFooter = styled.div`
  border-top: 1px solid #e2e2e2;
  a {
    color: black;
    font-size: 20px;
  }
`

const CopyRight = styled.div`
  border-top: 1px solid #e2e2e2;
`