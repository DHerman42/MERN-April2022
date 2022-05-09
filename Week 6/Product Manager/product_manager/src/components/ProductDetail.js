import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return(
        <Card className='mt-4'>
            <Card.Header>Title: {product.title}</Card.Header>
            <Card.Body>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </Card.Body>
        </Card>
    )
}

export default ProductDetail;