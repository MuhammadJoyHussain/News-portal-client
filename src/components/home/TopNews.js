import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TopNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/topnews`)
            .then(res => setNews(res.data.slice(0, 6)))
    }, []);
    return (
            <Container className="mt-5">
                <h3>Top News</h3>
                <CardGroup>
                    {
                        news.map(card => {
                            return (
                                <Card>
                                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                    </Card.Body>
                                    <div className="m-2 ms-auto">
                                        <Link className="btn btn-dark" to="/topnews">View more</Link>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </CardGroup>
            </Container>
    );
};

export default TopNews;