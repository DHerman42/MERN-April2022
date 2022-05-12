import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { Card, Table, Button } from "react-bootstrap";

import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProducts(res.data));
    }, [products]);

    const removeFromDom = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch((err) => console.log(err))
	}

    return(
        <Card className='mt-4'>
            <Card.Header>All Products</Card.Header>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th className='fitcol'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product, index) => {
                        return <tr key={index}>
                            <td><Link to={`/${product._id}`}>{product.title}</Link></td>
                            <td className='fitcol'>
                                <Link to={`/edit/${product._id}`}><Button variant='outline-primary'>Edit</Button></Link>
                                <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
        </Card>
    )
}

export default ProductList;