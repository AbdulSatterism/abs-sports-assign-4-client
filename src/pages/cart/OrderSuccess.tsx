import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-6">Order Placed Successfully!</h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
