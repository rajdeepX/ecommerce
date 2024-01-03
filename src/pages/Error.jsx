import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>Hello there!</h2>
      <h3>Please login to view this page</h3>
      <Link to={"/"} style={{}}>
        Login
      </Link>
    </div>
  );
};
export default Error;
