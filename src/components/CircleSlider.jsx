import { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";

import image1 from "../../assets/Angular.png";
import image2 from "../../assets/GitHub.png";
import image3 from "../../assets/HTML5.png";
import image4 from "../../assets/JavaScript.png";

export const CircleSlider = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [image1, image2, image3, image4];
  const info = ["Delhi", "Mumbai", "Bengaluru", "Kolkata"];
  return (
    <>
      <div className="carousel">
        <FancyCarousel images={images} setFocusElement={setFocusElement} />
        <div className="info-box-wrapper">
          <p> {info[focusElement]} </p>
        </div>
      </div>
      ;
      {/* <aside className="w-full pt-20 text-center flex flex-col justify-center">
          <img
            src={proPic}
            alt="Shanika E"
            className=" rounded-full cursor-pointer w-3/4 h-auto  shadow-2xl shadow-pink-300 transition-all duration-200 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 "
          />
          <p className="text-2xl  md:text-4xl mt-12">{textHello}</p>
          <h1 className="text-3xl font-bold md:text-4xl my-4">{textName}</h1>
          <h2 className="text-4xl   my-3 md:text-4xl">{title}</h2>
        </aside> */}
    </>
  );
};
