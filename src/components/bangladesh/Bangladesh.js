import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Bangladesh = () => {
    const [bangladesh, setBangladesh] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/bangladesh`)
            .then(res => setBangladesh(res.data))
    }, []);
    return (
        <Container className="align-items-center">
            <h3>Bangladesh</h3>
            {
                bangladesh.map(card => {
                    return (
                        <Card style={{ width: '60rem', marginTop: "50px" }}>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </Container>
    );
};

export default Bangladesh;