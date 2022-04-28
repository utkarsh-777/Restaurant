import Header from "../../../components/Header/Header";
import CarouselComp from "../../../components/CarouselComp/CarouselComp";
import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Axios from "../../../axios";
import HorizontalScroll from "react-scroll-horizontal";

const CarouselPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("/menu/get-all-categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const child = { width: `40em`, height: "100%" };
  const parent = { height: "90vh", backgroundColor: "black" };
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <CarouselComp categories={categories.length > 0 && categories} />
      <div style={parent}>
        <div style={{ height: "10rem" }}></div>
        <HorizontalScroll reverseScroll={true}>
          {categories.map((category) => (
            <div key={category._id} style={child}>
              <CarouselCard
                image={category.categoryPhoto}
                title={category.categoryType}
                category={category}
              />
            </div>
          ))}
        </HorizontalScroll>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CarouselPage;
