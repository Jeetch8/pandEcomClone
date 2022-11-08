import React from "react";
import Amex from "../Svg/amex.svg";
import ApplePay from "../Svg/apple-pay.svg";
import GooglePay from "../Svg/google-pay.svg";
import Paypal from "../Svg/paypal.svg";
import Visa from "../Svg/visa.svg";

const Footer = () => {
  return (
    <div className="bg-[#F4F3F3] flex justify-between px-[10vw] py-[5vh] mt-[10vh] overflow-hidden max-w-[100vw]">
      <ul className="leading-[5vh]">
        <li>
          <h2 className="font-medium">10% Off Your First Order</h2>
          <h3 className="text-[14px]">
            Subscribe to your mailing list for 30% off your first order.
          </h3>
        </li>
        <li>
          <h2 className="font-medium">30 Days Return</h2>
          <h3 className="text-[14px]">
            Shop with certainity with your 30 day returns policy.
          </h3>
        </li>
        <li>
          <h2 className="font-medium">Worlwide Shipping</h2>
          <h3 className="text-[14px]">
            Free worldwide shipping on all orders over $95.
          </h3>
        </li>
        <li>
          <ul className="flex items-center space-x-2">
            <li>
              <img src={Amex} alt="" className="w-[2vw]" />
            </li>
            <li>
              <img src={GooglePay} alt="" className="w-[2vw]" />
            </li>
            <li>
              <img className="w-[2vw]" src={ApplePay} alt="" />
            </li>
            <li>
              <img className="w-[1vw]" src={Paypal} alt="" />
            </li>
            <li>
              <img className="w-[2vw]" src={Visa} alt="" />
            </li>
          </ul>
        </li>
      </ul>
      <ul className="leading-[4vh]">
        <li className="font-bold">Socials</li>
        <li className="text-[14px]">Instagram</li>
        <li className="text-[14px]">Facebook</li>
        <li className="text-[14px]">Youtube</li>
        <li className="text-[14px]">Pinterest</li>
      </ul>
      <ul className="leading-[4vh]">
        <li className="font-bold">Info</li>
        <li className="text-[14px]">Loyalty Dept.</li>
        <li className="text-[14px]">Account</li>
        <li className="text-[14px]">Hellp Center</li>
        <li className="text-[14px]">Live Chat</li>
        <li className="text-[14px]">Careers</li>
        <li className="text-[14px]">Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
