import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div key={product.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                        <p>{product.price} USD</p>
                        <button>
                            <a href={`/product/${product.id}`}>View Details</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
