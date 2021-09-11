import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Cards = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/news`)
            .then(res => setCard(res.data))
    }, []);

    return (
        <div>
            {
                card.map(card => {
                    return (
                        <Container>
                            <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Container>
                    );
                })
            }
        </div>
    );
};

export default Cards;