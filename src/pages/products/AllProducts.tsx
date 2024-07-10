/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useGetAllProductsQuery } from "../../redux/features/products/ProductsApi";
import { TProducts } from "../../types/types";
import Product from "./Product";

const AllProducts = () => {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const handleSelect = (e: any) => {
    setFilter(e.target.value);
    console.log(filter);
  };

  return (
    <div>
      <div className="flex justify-between  mx-4 py-6">
        <div>
          <label className="input input-bordered border-[#04211c] flex items-center gap-2">
            <input
              onClick={handleSelect}
              type="text"
              className="grow"
              name="search"
              placeholder="Search by name, category"
            />
          </label>
        </div>

        <div>
          <div onChange={handleSelect} className="mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Filter by
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 "
            >
              <option value="price">Price</option>
              <option value="category">Category</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data?.data?.map((item: TProducts) => (
          <Product key={item?._id} {...item}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
