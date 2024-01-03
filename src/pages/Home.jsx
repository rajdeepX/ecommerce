import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";

const Home = () => {
  const user = localStorage.getItem("token");
  const userImg = localStorage.getItem("img");
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    productFilters();
  }, [price, searchValue]);

  if (!user) {
    window.location.href = "/error";
    return null;
  }

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const fetchProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const products = await data.products;

    let maxPrice = Math.max(...products.map((item) => item.price));
    let minPrice = Math.min(...products.map((item) => item.price));

    setProduct(products);
    setSortedProducts(products);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMinPrice(minPrice);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const productFilters = () => {
    let filteredProducts = [...product];

    if (price >= 0) {
      filteredProducts = filteredProducts.filter((item) => item.price <= price);
    }

    if (searchValue !== "") {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setSortedProducts(filteredProducts);
  };

  const addToCart = (productPrice) => {
    setCartCount(cartCount + 1);
    setCartAmount(cartAmount + productPrice);
  };

  return (
    <>
      <div className="nav-container">
        <Header
          logoutHandler={logoutHandler}
          cartCount={cartCount}
          cartAmount={cartAmount}
          userImg={userImg}
        />
        <Filter
          searchHandler={searchHandler}
          minPrice={minPrice}
          maxPrice={maxPrice}
          price={price}
          priceHandler={priceHandler}
        />
      </div>
      <div className="product-container__main">
        {sortedProducts?.map((product) => {
          return (
            <Card key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </div>
    </>
  );
};
export default Home;
