import "./Filter.css";

const Filter = ({ searchHandler, minPrice, maxPrice, price, priceHandler }) => {
  return (
    <div className="product-filter__box">
      <div className="product-filter__search">
        <h2>Search</h2>
        <input
          type="search"
          name="search"
          placeholder="Search products"
          onChange={searchHandler}
        />
      </div>
      <div className="product-filter__price">
        <label htmlFor="price-filter">Sort by price (${price})</label>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={priceHandler}
        />
      </div>
    </div>
  );
};
export default Filter;
