/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import Product from "./Product";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(queryParams.get("category") || "");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading } = useGetAllProductsQuery(
    {
      page,
      limit,
      search,
      category,
      minPrice,
      maxPrice,
      brand,
      sort,
      order,
    } || undefined
  );

  useEffect(() => {
    setCategory(queryParams.get("category") || "");
  }, [location.search]);

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setBrand("");
    setSort("");
    setOrder("asc");
    setPage(1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="my-12 p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
          placeholder="Search by name"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="">All Categories</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Tenis">Tenis</option>
          <option value="Hockey">Hockey</option>
        </select>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
          placeholder="Max Price"
        />
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="">All Brands</option>
          <option value="SS">SS</option>
          <option value="Adidas">Adidas</option>
          <option value="PP">PP</option>
          <option value="VS">VS</option>
        </select>
        <select
          value={sort}
          onChange={(e: any) => setSort(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-[#04211c"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button
          className="w-full bg-[#04211c] text-xl hover:bg-[#32665e] text-white p-2 rounded"
          onClick={handleReset}
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
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
          min="1"
          className="w-12 px-2 py-1 mx-2 text-center border rounded-md"
        />
        <button className="btn btn-outline" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
