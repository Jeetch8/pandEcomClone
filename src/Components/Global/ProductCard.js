import React from "react";

const ProductCard = ({ productName, price }) => {
  return (
    <div className="inline-block w-[20vw] mb-[8vh]">
      <div className="h-[50vh] bg-[url(https://cdn.shopify.com/s/files/1/0496/8602/0247/products/winterecom_0017_2D9A7921_900x.jpg?v=1667576748)] hover: bg-[url(https://cdn.shopify.com/s/files/1/0496/8602/0247/products/winterecom_0002_2D9A8458_900x.jpg?v=1667573757)] bg-contain bg-no-repeat"></div>
      <div>
        <h1>{productName}</h1>
        <h2>{price}</h2>
        <button className="bg-black text-white font-medium text-[14px] px-[7.3vw] whitespace-nowrap py-[1.2vh] mt-[20px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
