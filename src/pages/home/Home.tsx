import ContactUs from "../contact/ContactUs";
import Carousel from "./Carousel";
import Catagories from "./Catagories";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeatureProducts />
      <Catagories />
      <ContactUs />
    </div>
  );
};

export default Home;
