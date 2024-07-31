import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cricket",
    image:
      "https://media.istockphoto.com/id/1479014360/photo/modern-generic-brand-cricket-bat.jpg?s=1024x1024&w=is&k=20&c=8ZX5sVXWoJgo3Wz9grCXUDN94GuXxVj1Fwnv0Bsc3Uk=",
  },
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tenis",
    image:
      "https://images.pexels.com/photos/6572957/pexels-photo-6572957.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Hockey",
    image:
      "https://media.istockphoto.com/id/173587686/photo/hockey-stick-and-pick-on-white-background.jpg?s=1024x1024&w=is&k=20&c=voJK7sE0A0pJCO3-ep91T4V3MVraV6LkIQxnBRPwUMc=",
  },
];

const Catagories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/all-products?category=${category}`);
  };

  return (
    <div className="p-4 my-12">
      <div className="divider my-12 ">
        <h1 className="text-3xl text-[#04211c] font-bold " data-aos="zoom-in">
          Categories
        </h1>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="cursor-pointer shadow-lg"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className=" w-full  h-[500px] object-cover rounded-sm"
            />
            <div className="absolute   mt-[-80px] ml-[40px]   rounded-full">
              <button className="btn  text-xl bg-[#04211c] text-white border-spacing-0">
                {category.name}
                <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catagories;
