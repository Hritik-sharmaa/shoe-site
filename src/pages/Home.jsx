import React from "react";
import Helment from "../components/helmet/Helment";
import "../styles/Home.css";
import { FaArrowRight } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import BannerImg from "../assets/images/air-max-1-premium-2-shoes-Zl7x8b-removebg-preview.png";
import BestSellerImg from "../assets/images/Vector_image_of_best_seller_stamp-removebg-preview.png";

const Home = () => {
  return (
    <>
      <Helment title={"Home"} />
      <div className="home-main container mx-auto">
        <div className="left-main">
          <h1>
            Find your
            <br /> Sneaker
          </h1>
          <p>
            Our reputations shines as rightly as our shoes. fashionable,
            quality, durable and best <br />
            shoes our will find for everyone.
          </p>
          <button>
            Explore more{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="right-main">
          <img
            src={BannerImg}
            alt="nike-air-force-2"
            className="banner-img drop-shadow-2xl"
          />
          <div className="tag">
            100% <br />
            comfortable
          </div>
          <img src={BestSellerImg} alt="best-seller" className="seller-img" />
        </div>
      </div>
      <div className="rolling-banner">
      <marquee behaviour='scroll' direction='left'>
        <span>
          <IoSparkles className="stars" />
          Product
          <IoSparkles className="stars" />
          Exclusive
          <IoSparkles className="stars" />
          Best
          <IoSparkles className="stars" />
          Comfortable
        </span>
        </marquee>
      </div>
    </>
  );
};

export default Home;
