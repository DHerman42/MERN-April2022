import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { Card, Table, Button } from "react-bootstrap";

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [products.length]);

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return(
        <Card className='mt-4'>
            <Card.Header>All Products</Card.Header>
            <Table variant='sm'>
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
                                <Button variant='outline-danger ms-3' onClick={(e) => {deleteProduct(product._id)}}>Delete</Button>
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