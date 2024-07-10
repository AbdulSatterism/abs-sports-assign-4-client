import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import Product from "./Product";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="divider my-12 ">
        <h1 className="text-3xl text-[#82908e] " data-aos="zoom-in">
          Demo Products
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.data?.slice(0, 3).map((item: TProducts) => (
          <Product key={item?._id} {...item}></Product>
        ))}
      </div>
      {data?.data?.length > 3 && (
        <div className=" flex justify-start mx-auto my-4">
          <Link to="/all-products">
            <button className="btn mx-auto bg-[#04211c] text-xl  text-white border-spacing-0">
              see all products
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;
