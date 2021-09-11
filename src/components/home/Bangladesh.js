import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Bangladesh = () => {
    const [bangladesh, setBangladesh] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/bangladesh`)
            .then(res => setBangladesh(res.data.slice(0, 6)))
    }, []);
    return (
        <Container className="mt-5">
            <h3>Bangladesh</h3>
            <CardGroup>
                {
                    bangladesh.map(card => {
                        return (
                            <Card>
                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                </Card.Body>
                                <div className="m-2 ms-auto">
                                    <Link className="btn btn-dark" to="/bangladesh">View more</Link>
                                </div>
                            </Card>
                        );
                    })
                }
            </CardGroup>
        </Container>
    );
};

export default Bangladesh;