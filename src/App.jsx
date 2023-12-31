import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import PageNumber from "./components/PageNumber";

function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await res.json();

        if (data && data.products) {
            setProducts(data.products);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = products.length / 10;
        }
        setPage(newPage);
    };

    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > products.length / 10) {
            newPage = 1;
        }
        setPage(newPage);
    };

    const selectPageHandler = (selectedPage) => {
        setPage(selectedPage);
    };

    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 10 - 10, page * 10).map((prod) => {
                        return <Product prod={prod} />;
                    })}
                </div>
            )}
            {products.length > 0 && (
                <div className="pagination">
                    <span onClick={prevPage}> Prev</span>
                    <PageNumber
                        products={products}
                        selectPageHandler={selectPageHandler}
                        page={page}
                    />
                    <span onClick={nextPage}>Next</span>
                </div>
            )}
        </div>
    );
}

export default App;
