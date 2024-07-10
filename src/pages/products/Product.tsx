import { Link } from "react-router-dom";
import { TProducts } from "../../types/types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Product = (item: TProducts) => {
  const { name, price, image } = item;
  return (
    <div data-aos="zoom-in-up" className="mx-auto card w-96 shadow-md">
      <figure>
        <img className="w-96 h-[320px]" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#82908e] text-2xl">{name}</h2>
        <p className="text-[#82908e] text-xl">${price}</p>

        <div className="card-actions   justify-end">
          <Link to="/all-products">
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

export default Product;
