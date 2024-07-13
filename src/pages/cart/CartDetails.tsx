import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TProducts } from "../../types/types";
import { MdDelete } from "react-icons/md";
import {
  decrement,
  increment,
  removeProduct,
} from "../../redux/features/cartSlice";
import { useGetHomeProductsQuery } from "../../redux/api/baseApi";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const CartDetails = () => {
  const cartProducts = useAppSelector((state) => state?.cart?.products);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetHomeProductsQuery(undefined);

  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const vat = totalPrice * 0.15;
  const totalWithVat = totalPrice + vat;

  if (isLoading) {
    return <Loading />;
  }

  const handleIncrease = (id: string) => {
    data.data.map((item: TProducts) => {
      if (item._id === id) {
        dispatch(increment(item));
      }
    });
  };
  const handleDecrease = (id: string) => {
    data.data.map((item: TProducts) => {
      if (item._id === id) {
        dispatch(decrement(item));
      }
    });
  };
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this one ${id} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        data.data.map((item: TProducts) => {
          if (item._id === id) {
            dispatch(removeProduct(item));
          }
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      {cartProducts.length === 0 ? (
        <p className="text-xl text-center text-red-500">
          Your cart is empty!!!!
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg p-4">
          <table className="table ">
            <thead>
              <tr className="text-lg text-center border-1 border-[#04211c] text-[#04211c] ">
                <th>name</th>
                <th>price</th>
                <th>inc </th>
                <th>quantity </th>
                <th>dec </th>
                <th>remove </th>
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product: TProducts) => (
                <tr
                  key={product?._id}
                  className="border-1 border-[#04211c] p-2"
                >
                  <td className="text-center">
                    <div className="flex items-center gap-6">
                      <div className="avatar">
                        <div className="mask bg-[#04211c] mask-squircle w-12 h-12">
                          <img src={product?.image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold uppercase text-center">
                          {product?.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    {product?.price * product?.quantity}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleIncrease(product?._id)}
                      className="btn text-center text-[#04211c]"
                    >
                      <FaPlus />
                    </button>
                  </td>

                  <td className="text-center">
                    <button className="btn text-center text-[#04211c]">
                      {product?.quantity}
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDecrease(product?._id)}
                      className="btn  text-[#04211c]"
                    >
                      <FaMinus />
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleRemove(product?._id)}
                      className="text-3xl text-red-500 hover:text-red-900"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="items-center gap-4 my-4">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            <p className="text-xl font-bold">Vat: ${vat.toFixed(2)}</p>

            <p className="text-xl font-bold">
              Subtotal Including Vat: ${totalWithVat}
            </p>

            <div className="card-actions   justify-start mt-4">
              <Link to="/checkout">
                <button
                  disabled={cartProducts?.length === 0}
                  className="btn bg-[#04211c] text-xl  text-white border-spacing-0"
                >
                  {cartProducts?.length === 0 ? "cart is empty!" : "Checkout"}{" "}
                  <IoBagCheckOutline />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDetails;
