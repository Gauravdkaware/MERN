import { useEffect, useState } from "react";
import { getProducts } from "../api/productAPI";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    const data = await getProducts();
    setProducts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
};

export default ProductList;
