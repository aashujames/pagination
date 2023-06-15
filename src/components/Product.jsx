import React from "react";
import "./product.css";

const Product = ({ prod }) => {
    return (
        <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <span>{prod.title}</span>
        </span>
    );
};

export default Product;
