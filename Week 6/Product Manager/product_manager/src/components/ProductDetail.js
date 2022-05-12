import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import DeleteButton from './DeleteButton';

import { Card, Button } from "react-bootstrap";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

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
            <Card.Footer>
                <Link to={`/edit/${product._id}`}><Button variant='outline-primary'>Edit</Button></Link>
                <DeleteButton productId={product._id} successCallback={() => navigate("/")}/>
            </Card.Footer>
        </Card>
    )
}

export default ProductDetail;