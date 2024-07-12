/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/api/baseApi";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductUpdate = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data: any) => {
    setLoading(true);
    const { name, brand, category, quantity, price, rating, description } =
      data;
    const item = {
      name,
      brand,
      category,
      price: parseFloat(price),
      rating: parseFloat(rating),
      quantity: parseInt(quantity),
      description,
    };
    const { _id } = product;
    await updateProduct({ _id, item });
    setLoading(false);
    Swal.fire({
      icon: "success",
      title: "New product added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard/manage-products");
  };

  return (
    <div className="w-full p-10 shadow-xl ">
      <div className=" flex justify-center items-center mb-4">
        <h1 className=" text-3xl  text-[#04211c] uppercase">
          update {product?.name} product{" "}
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4 form-control ">
          <label className="label">
            <span className="font-semibold label-text">Product Name* </span>
          </label>
          <input
            type="text"
            defaultValue={product?.name}
            placeholder="Product Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="w-full input input-bordered "
          />
        </div>
        <div className="w-full mb-4 form-control ">
          <label className="label">
            <span className="font-semibold label-text">Product Category* </span>
          </label>
          <input
            defaultValue={product?.category}
            type="text"
            placeholder="Product Category"
            {...register("category", { required: true, maxLength: 120 })}
            className="w-full input input-bordered "
          />
        </div>
        <div className="w-full mb-4 form-control ">
          <label className="label">
            <span className="font-semibold label-text">Product Brand* </span>
          </label>
          <input
            defaultValue={product?.brand}
            type="text"
            placeholder="Product Brand"
            {...register("brand", { required: true, maxLength: 120 })}
            className="w-full input input-bordered "
          />
        </div>

        <div className="flex my-4">
          <div className="w-full ml-4 form-control ">
            <label className="label">
              <span className="font-semibold label-text">quantity* </span>
            </label>
            <input
              defaultValue={product?.quantity}
              type="number"
              placeholder="Type here"
              {...register("quantity", { required: true })}
              className="w-full input input-bordered "
            />
          </div>
          <div className="w-full ml-4 form-control ">
            <label className="label">
              <span className="font-semibold label-text">Price* </span>
            </label>
            <input
              defaultValue={product?.price}
              type="number"
              placeholder="Type here"
              {...register("price", { required: true })}
              className="w-full input input-bordered "
            />
          </div>
          <div className="w-full ml-4 form-control ">
            <label className="label">
              <span className="font-semibold label-text">Rating* </span>
            </label>
            <input
              defaultValue={product?.rating}
              type="number"
              placeholder="Type here"
              {...register("rating", { required: true })}
              className="w-full input input-bordered "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description*</span>
          </label>
          <textarea
            defaultValue={product?.description}
            {...register("description", { required: true })}
            className="h-24 textarea textarea-bordered"
            placeholder="Product details"
          ></textarea>
        </div>
        <input
          disabled={loading}
          className="w-full bg-[#04211c] hover:bg-[#32665e] text-white p-2 my-2 rounded "
          type="submit"
          value={loading ? "Updating Product..." : "update Product"}
        />
      </form>
    </div>
  );
};

export default ProductUpdate;
