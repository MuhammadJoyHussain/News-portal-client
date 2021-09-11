import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card,  Container } from 'react-bootstrap';


const TopNewses = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/topnews`)
            .then(res => setCard(res.data))
    }, []);
    return (
            <Container className="align-items-center">
                <h3>Top News</h3>
                    {
                        card.map(card => {
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

export default TopNewses;