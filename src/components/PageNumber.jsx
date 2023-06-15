import React from "react";
import "./pageNumber.css";

const PageNumber = ({ products, selectPageHandler, page }) => {
    return (
        <div>
            {[...Array(products.length / 10)].map((_, i) => {
                return (
                    <span
                        key={i}
                        className={page === i + 1 ? "pagination__selected" : ""}
                        onClick={() => selectPageHandler(i + 1)}
                    >
                        {i + 1}
                    </span>
                );
            })}
        </div>
    );
};

export default PageNumber;
