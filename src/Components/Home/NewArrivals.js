import React from "react";
import ProductCard from "../Global/ProductCard";

const NewArrivals = () => {
  const arr = [1, 23, 3, 4, 32, 42, 34, 65, 86, 865, 8, 567, 5];
  return (
    <div className="ml-[10vw] mb-[5vh]">
      <h1 className="text-[26px] font-medium my-[2vh]">New Arrivals</h1>
      {/* Cards */}
      <div className="overflow-x-scroll flex scrollbar-hide">
        <div className="flex flex-nowrap space-x-4 ">
          {arr.map((card) => {
            return (
              <ProductCard
                price={"$255"}
                productName={"Mechanic Jacket - Black"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
