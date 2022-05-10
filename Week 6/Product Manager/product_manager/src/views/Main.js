import React, {useState} from 'react';

import { Row, Col } from "react-bootstrap";

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const {products, setProducts, removeFromDom} = props;

    return(
        <Row>
            <Col>
                <ProductForm products={products} setProducts={setProducts} />
            </Col>
            <Col>
                <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
            </Col>
        </Row>
    )
}

export default Main;