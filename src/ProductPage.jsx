import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
    const { id } = useParams(); // get the product id from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };

        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '200px' }} />
            <p>{product.description}</p>
            <p>{product.price} USD</p>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductPage;
