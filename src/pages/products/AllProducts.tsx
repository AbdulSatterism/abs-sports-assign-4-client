/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import Product from "./Product";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const { data, isLoading } = useGetAllProductsQuery({ search, price, rating });

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };
  const handleRating = (e: any) => {
    setRating(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between  mx-4 py-6">
        <div>
          <input
            onChange={handleSearch}
            type="text"
            className="input input-bordered"
            placeholder="search product"
          />
          <button
            onClick={handleSearch}
            className="btn bg-[#04211c] text-sm  text-white "
          >
            Search
          </button>
        </div>

        <div>
          <select
            onClick={handlePrice}
            className="select select-info w-full max-w-xs"
          >
            <option disabled>Filter by Price</option>
            <option value="asc">High Price</option>
            <option value="desc">Low Price</option>
          </select>
        </div>
        <div>
          <select
            onClick={handleRating}
            className="select select-info w-full max-w-xs"
          >
            <option disabled>Filter by Rating</option>
            <option value="asc">Top Rating</option>
            <option value="desc">Less Rating</option>
          </select>
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
