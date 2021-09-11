import React from 'react';
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import Cards from './Cards';

const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Cards />
                    </Col>
                    <Col lg={9} className="mt-3">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum architecto eveniet distinctio corporis repellat labore aut non illum soluta?</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;