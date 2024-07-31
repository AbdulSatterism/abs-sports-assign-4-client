import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import Loading from "../../components/Loading/Loading";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TProducts } from "../../types/types";
import { addToCart } from "../../redux/features/cartSlice";

import Rating from "react-rating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) =>
    state.cart.products.find((pd) => pd?._id === product?._id)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleAddToCart = (product: TProducts) => {
    //add to cart
    dispatch(addToCart(product));
  };

  return (
    <div className="card lg:card-side bg-white gap-4 py-8 px-2">
      <img
        data-aos="zoom-in"
        className="lg:w-2/3 sm:w-full h-[450px] rounded-sm shadow-md"
        src={product?.image}
        alt="Album"
      />

      <div data-aos="zoom-out" className="gap-2 ">
        <h1 className="text-4xl  my-4 font-bold text-[#1d3733] uppercase">
          {" "}
          {product?.name}
        </h1>

        <p className="text-[#1d3733] text-xl font-bold">
          brand : {product?.brand}
        </p>
        <p className="text-[#1d3733] text-xl font-bold">
          category : {product?.category}
        </p>
        <p className="text-[#1d3733] text-xl font-bold">
          available : {product?.quantity}
        </p>

        {
          <p className="text-[#1d3733] text-xl font-bold">
            discount : ${product?.discount ? product?.discount : "0"}%
          </p>
        }

        <div>
          <span className="text-[#1d3733] text-xl font-bold">rating : </span>
          {/* @ts-expect-error their is no type declaration file for react rating*/}
          <Rating
            initialRating={product?.rating | 0}
            emptySymbol={
              <span className="text-gray-300 text-2xl  font-semibold">☆</span>
            }
            fullSymbol={
              <span className="text-yellow-500 text-2xl font-semibold">★</span>
            }
          />
        </div>
        <p className="text-3xl font-bold text-[#1d3733] my-4">
          $ {product?.price}
        </p>
        <p>
          <span className="text-[#04211c] text-xl font-bold">
            description :
          </span>
          <span className="text-[#1d3733] justify-center items-center">
            {product?.description}
          </span>
        </p>

        <div className="card-actions   justify-end mt-8">
          <button
            onClick={() => handleAddToCart(product)}
            disabled={cartProduct?.quantity === product?.quantity}
            className="btn bg-[#04211c] text-xl  text-white border-spacing-0"
          >
            {cartProduct?.quantity === product?.quantity
              ? "Out Of Stock"
              : " Add To Cart"}
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
