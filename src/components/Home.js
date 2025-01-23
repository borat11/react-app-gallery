import React from 'react';
import { Card, CardImg } from 'reactstrap';

const Home = ({ image }) => {
    return (


        <Card >
            <CardImg src={image} alt="..." />
        </Card>

    );
};

export default Home;
