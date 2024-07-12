/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeCartProducts } from "../../redux/features/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CheckOutPage = () => {
  const cartProducts = useAppSelector((state) => state?.cart?.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const onSubmit = (data: any) => {
    console.log(data);
    if (paymentMethod === "cash") {
      cartProducts.forEach((item) => {
        dispatch(removeCartProducts(item._id));
        // todo:dispatch yet!
      });
      Swal.fire({
        title: "Well done!",
        text: "Your order placed successfully!",
        icon: "success",
      });
      navigate("/");
    } else {
      //
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Delivery Address</label>
          <input
            type="text"
            {...register("address", { required: true })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Payment Method</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="mr-2"
            />
            <span>Cash on Delivery</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="stripe"
              checked={paymentMethod === "stripe"}
              onChange={() => setPaymentMethod("stripe")}
              className="mr-2"
            />
            <span>Stripe</span>
          </div>
        </div>
        <input
          className="w-full bg-[#04211c] hover:bg-[#32665e] text-white p-2 rounded "
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default CheckOutPage;
