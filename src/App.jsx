import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

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

    return <></>;
}

export default App;
