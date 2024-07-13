/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDelete } from "react-icons/md";
import Loading from "../../components/Loading/Loading";
import {
  useDeleteProductMutation,
  useManageAllProductsQuery,
} from "../../redux/api/baseApi";
import { TProducts } from "../../types/types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [deleteProduct] = useDeleteProductMutation();
  const { data, isLoading } = useManageAllProductsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }


  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this one ${id} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto  p-4">
      <table className="table ">
        <thead>
          <tr className="text-lg text-center border-1 border-[#04211c] text-[#04211c] ">
            <th>name</th>
            <th>price</th>
            <th>quantity </th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product: TProducts) => (
            <tr key={product?._id} className="border-1 border-[#04211c] p-2">
              <td className="text-center">
                <div className="flex items-center gap-6">
                  <div className="avatar">
                    <div className="mask bg-[#04211c] mask-squircle w-12 h-12">
                      <img src={product?.image} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold uppercase text-center">
                      {product?.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-center">${product?.price}</td>
              <td className="text-center">{product?.quantity}</td>
              <td className="text-center ">
                <Link to={`/dashboard/product-update/${product?._id}`}>
                  <button className="text-xl btn">Update</button>
                </Link>
              </td>
              <td className="text-center">
                <button
                  onClick={() => handleDelete(product?._id)}
                  className="text-3xl text-red-500 hover:text-red-900"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
