import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const items = [
    {
      image:
        "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg",
      title: "Bat",
    },
    {
      image:
        "https://mkscricket.com/wp-content/uploads/2024/02/MkS-cricket-gloves--896x1024.jpg",
      title: "Bat",
    },
    {
      image:
        "https://images.pexels.com/photos/2862718/pexels-photo-2862718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bat",
    },
  ];

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
        {items?.map((item, index) => (
          <div key={index} className="slide-item ">
            <img className="w-full h-dvh" src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
