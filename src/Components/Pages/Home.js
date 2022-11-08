import React from "react";
import Navbar from "../Global/Navbar";
import { FiGlobe } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { DiSizzlejs } from "react-icons/di";
import NewArrivals from "../Home/NewArrivals";
import Footer from "../Global/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden w-[100vw]">
      <div
        style={{
          background:
            'url("https://cdn.shopify.com/s/files/1/0496/8602/0247/files/WINTER-NEW-ARRIVALS-DESKTOP-BANNER-2_900x@2x.progressive.jpg?v=1667565876")',
          backgroundPosition: "center",
          width: "99vw",
        }}
        className="bg-cover h-[80vh] w-[100vw] flex justify-center items-center space-x-4"
      >
        <button className="bg-white text-[12px] px-14 py-3">Shop Men's</button>
        <button className="bg-white text-[12px] px-14 py-3">
          Shop Women's
        </button>
      </div>
      <div className="flex justify-center py-[10vh] space-x-10">
        <div className="w-[14vw] text-center">
          <div className="flex justify-center">
            <FiGlobe className="text-center text-[30px]" />
          </div>
          <h2 className="font-medium my-[2vh]">Free Worldwide Shipping</h2>
          <h3>Free worldwide shipping on all orders over $95</h3>
        </div>
        <div className="w-[20vw] text-center">
          <div className="flex justify-center">
            <CiDiscount1 className="text-center text-[30px]" />
          </div>
          <h2 className="font-medium my-[2vh]">10% Off First Order</h2>
          <h3>Subscribe to our mailing list for 10% off your first order</h3>
        </div>
        <div className="w-[20vw] text-center">
          <div className="flex justify-center">
            <BiCoinStack className="text-center text-[30px]" />
          </div>
          <h2 className="font-medium my-[2vh]">Join our Loyalty Dept.</h2>
          <h3>Earn rewards and benefits when you join our Loyalty Dept.</h3>
        </div>
        <div className="w-[20vw] text-center">
          <div className="flex justify-center">
            <DiSizzlejs className="text-center text-[30px]" />
          </div>
          <h2 className="font-medium my-[2vh]">Pay in 4 with Sezzle</h2>
          <h3>
            Choose Sezzle at checkout and spread you payments over 6 weeks,
            interest-free!
          </h3>
        </div>
      </div>
      <NewArrivals />
      <div className="flex justify-center text-center w-[100vw]">
        <a
          href="/"
          className="bg-[url(https://cdn.shopify.com/s/files/1/0496/8602/0247/files/mens_main_block_720x@2x.progressive.jpg?v=1667575413)] bg-contain bg-no-repeat h-[80vh]  flex justify-center items-center text-white font-medium text-[25px] w-[40vw]"
        >
          Men
        </a>
        <a
          href="/"
          className="bg-[url(https://cdn.shopify.com/s/files/1/0496/8602/0247/files/womens_main_block_1_720x@2x.progressive.jpg?v=1667575429)] bg-contain bg-no-repeat h-[80vh] w-[40vw] flex justify-center items-center text-white font-medium text-[25px]"
        >
          Women
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
