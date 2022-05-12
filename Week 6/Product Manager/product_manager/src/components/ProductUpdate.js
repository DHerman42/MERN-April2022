import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const ProductUpdate = (props) => {
	const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({});
	const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                setProduct(res.data);
				setLoaded(true);
            })
    }, [])

    const updateProduct = productParam => {
        axios.put('http://localhost:8000/api/products/' + id, productParam)
            .then(res => {
				console.log(res);
				navigate("/");
			})
    }

    return (
		loaded && (<>
			<ProductForm 
				onSubmitProp={updateProduct}
				cardHeader="Update Product"
				initialTitle={product.title}
				initialPrice={product.price}
				initialDescription={product.description}/>
			<DeleteButton productId={product._id} successCallback={() => navigate("/")}/></>
		)
		)
}

export default ProductUpdate;