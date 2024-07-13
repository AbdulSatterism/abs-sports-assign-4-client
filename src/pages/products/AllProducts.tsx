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

  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading } = useGetAllProductsQuery(
    { search, price, rating, page, limit } || undefined
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (e: any) => {
    const newPage = parseInt(e.target.value, 6);
    if (!isNaN(newPage) && newPage > 0) {
      setPage(newPage);
    }
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
            onChange={(e) => setPrice(e.target.value)}
            className="select select-info w-full max-w-xs"
          >
            <option disabled>Filter by Price</option>
            <option value="asc">High Price</option>
            <option value="desc">Low Price</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => setRating(e.target.value)}
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

      <div className="flex items-center justify-center mt-8">
        <button
          className="btn btn-outline"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <input
          type="number"
          value={page}
          onChange={handlePageChange}
          min="1"
          className="w-12 text-center px-2 py-1 border rounded-md mx-2"
        />
        <button
          className="btn btn-outline"
          disabled={data.length <= limit}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
