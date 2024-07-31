import { useGetHomeProductsQuery } from "../../redux/api/baseApi";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { TProducts } from "../../types/types";
import FeatureProduct from "./FeatureProduct";

const FeatureProducts = () => {
  const { data, isLoading } = useGetHomeProductsQuery(undefined, {
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 my-12">
      <div className="divider my-12 ">
        <h1 className="text-3xl text-[#04211c] font-bold " data-aos="zoom-in">
          Features Products
        </h1>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {data?.data?.slice(0, 4).map((item: TProducts) => (
          <FeatureProduct key={item?._id} {...item}></FeatureProduct>
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

export default FeatureProducts;
