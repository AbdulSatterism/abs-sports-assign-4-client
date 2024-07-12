/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/api/baseApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addProduct] = useAddProductMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const imageHostingToken = import.meta.env.VITE_APP_image_token;
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData.data.display_url;

      // Post product with image URL
      const { name, brand, category, quantity, price, rating, description } =
        data;
      const product = {
        name,
        brand,
        category,
        image: imgURL,
        price: parseFloat(price),
        rating: parseFloat(rating),
        quantity: parseInt(quantity),
        description,
        inStock: true,
      };
      await addProduct(product);
      reset();
      // alert("New product added successfully");
      Swal.fire({
        icon: "success",
        title: "New product added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      console.error("Error uploading image or adding product", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-8 shadow-lg">
      <div className=" flex justify-center items-center mb-4">
        <h1 className=" text-3xl  text-[#04211c] uppercase">Add product </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4 form-control ">
          <label className="label">
            <span className="font-semibold label-text">Product Name* </span>
          </label>
          <input
            type="text"
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
            {...register("description", { required: true })}
            className="h-24 textarea textarea-bordered"
            placeholder="Product details"
          ></textarea>
        </div>

        <div className="w-full mb-4 form-control">
          <label className="label">
            <span className="label-text">Product Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full file-input file-input-bordered "
          />
        </div>
        <input
          disabled={loading}
          className="w-full bg-[#04211c] hover:bg-[#32665e] text-white p-2 rounded "
          type="submit"
          value={loading ? "Adding Product..." : "Add Product"}
        />
      </form>
    </div>
  );
};

export default AddProducts;
