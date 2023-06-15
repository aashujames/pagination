import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await res.json();

        console.log(data);

        if (data && data.products) {
            setProducts(data.products);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 10 - 10, page * 10).map((prod) => {
                        return <Product prod={prod} />;
                    })}
                </div>
            )}
        </div>
    );
}

export default App;
