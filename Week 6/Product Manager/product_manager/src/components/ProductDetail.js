import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { Card, Button } from "react-bootstrap";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const {removeFromDom} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removeFromDom(productId)
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return(
        <Card className='mt-4'>
            <Card.Header>Title: {product.title}</Card.Header>
            <Card.Body>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </Card.Body>
            <Card.Footer>
                <Link to={`/edit/${product._id}`}><Button variant='outline-primary'>Edit</Button></Link>
                <Button variant='outline-danger ms-3' onClick={(e) => {deleteProduct(product._id)}}>Delete</Button>
            </Card.Footer>
        </Card>
    )
}

export default ProductDetail;