import { Link } from "react-router-dom";
import { TProducts } from "../../types/types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Rating from "react-rating";

const FeatureProduct = (item: TProducts) => {
  const {
    name,
    price,
    image,
    _id,
    discount,
    brand,
    quantity,
    category,
    rating,
  } = item;
  return (
    <div data-aos="zoom-in-up" className="mx-auto card w-full shadow-md">
      <figure>
        <img
          className="w-full h-[500px] object-cover rounded-sm "
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="card-title  text-[#04211c] text-2xl font-bold">
            {name}
          </h2>
        </div>
        <div className="flex justify-between my-2">
          <div className="">
            <p className="text-[#1d3733] text-xl font-semibold">
              Brand : {brand}
            </p>

            <p className="text-[#1d3733] text-xl font-semibold">
              Category : {category}
            </p>
            <p className="text-[#1d3733] text-xl font-extrabold">
              Price : ${price}
            </p>
          </div>

          <div className="">
            <p className="text-[#1d3733] text-xl font-semibold">
              Available : {quantity}
            </p>
            <p className="text-[#1d3733] text-xl font-semibold">
              Rating :
              {/* @ts-expect-error their is no type declaration file for react rating*/}
              <Rating
                initialRating={rating | 0}
                emptySymbol={
                  <span className="text-gray-300 text-2xl  font-semibold">
                    ☆
                  </span>
                }
                fullSymbol={
                  <span className="text-yellow-500 text-2xl font-semibold">
                    ★
                  </span>
                }
              />
            </p>

            {
              <p className="text-[#1d3733] text-xl font-semibold">
                Discount : ${discount ? discount : "0"}%
              </p>
            }
          </div>
        </div>

        <div className="card-actions   justify-end">
          <Link to={`/product-details/${_id}`}>
            <button className="btn bg-[#04211c] text-xl  text-white border-spacing-0">
              Details
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
