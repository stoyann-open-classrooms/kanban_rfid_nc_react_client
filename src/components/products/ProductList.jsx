import { useEffect, useState } from "react";


function ProductList() {
  const [products, setProducts] = useState('');
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_APP_BASE_URL}/products`
    );
    const data = await response.json();
    console.log(data);
  };

  return <div>ProductList</div>;
}

export default ProductList;
