import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from "react-bootstrap";

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [products]);

    return(
        <Card className='mt-4'>
            <Card.Header>All Products</Card.Header>
            <ListGroup variant='flush'>
                {
                    products.map((product, index) => {
                        return <ListGroup.Item key={index}><Link to={`/${product._id}`}>{product.title}</Link></ListGroup.Item>
                    })
                }
            </ListGroup>
        </Card>
    )
}

export default ProductList;