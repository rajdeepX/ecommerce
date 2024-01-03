import "./Card.css";

const Card = ({ product, addToCart }) => {
  const price = (
    product.price -
    (product.discountPercentage / 100) * product.price
  ).toFixed(2);

  const discountedPrice = Number(price);
  const cartHandler = () => {
    addToCart(discountedPrice);
  };

  return (
    <>
      <div className="product-card__box" key={product.id}>
        <div className="product-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-card__content">
          <div className="product-brand__box">
            <p className="product-head bold">{product.brand}</p>
            <p className="product-title">{product.title}</p>
          </div>
          <p className="product-rating">{product.rating} ratings</p>
          <div className="product-price__box">
            <p className="product-price bold">${price}</p>
            <p className="product-discount">
              <span className="strike">${product.price}</span> (
              {product.discountPercentage}% off)
            </p>
          </div>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default Card;
