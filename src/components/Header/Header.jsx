import "./Header.css";

const Header = ({ logoutHandler, cartCount, cartAmount, userImg }) => {
  return (
    <nav>
      <h2>products page</h2>
      <div className="product-head__left">
        <div className="product-cart__box">
          <p>Cart Items: {cartCount}</p>
          <p>
            Cart Amount: $
            {cartAmount > 0
              ? (Math.round(cartAmount * 100) / 100).toFixed(2)
              : 0}
          </p>
        </div>
        <button onClick={logoutHandler} className="logout">
          Logout
        </button>
        <div className="user-img__box">
          <img src={userImg} alt="user-image" className="user-img" />
        </div>
      </div>
    </nav>
  );
};
export default Header;
