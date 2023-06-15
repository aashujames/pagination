import React from "react";
import "./pageNumber.css";

const PageNumber = ({ products }) => {
    return (
        <div>
            {[...Array(products.length / 10)].map((_, i) => {
                return <span key={i}>{i + 1}</span>;
            })}
        </div>
    );
};

export default PageNumber;
