import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../../components/Loading/Loading";
import { TProducts } from "../../types/types";
import { useGetHomeProductsQuery } from "../../redux/api/baseApi";

const Carousel = () => {
  const { data, isLoading } = useGetHomeProductsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",

    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="w-full bg-[#04211c]">
      <Slider {...settings} className="shadow-lg">
        {data?.data?.slice(0, 3).map((item: TProducts) => (
          <div key={item._id} className="slide-item ">
            <img className="w-full h-dvh" src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
