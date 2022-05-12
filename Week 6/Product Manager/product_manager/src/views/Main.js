import axios from 'axios';
import React, {useEffect, useState} from 'react';

import { Row, Col } from "react-bootstrap";

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch((err) => console.log(err))
    }

    return(
        <Row>
            <Col>
                <ProductForm 
                    onSubmitProp={createProduct} 
                    cardHeader="Create Product"
                    initialTitle="" 
                    initialPrice="" 
                    initialDescription="" />
            </Col>
            <Col>
                <ProductList products={products} />
            </Col>
        </Row>
    )
}

export default Main;