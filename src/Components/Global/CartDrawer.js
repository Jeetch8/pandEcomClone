import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineClose } from "react-icons/ai";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "40vw" }}
      >
        <div className="flex justify-between p-[6vh]">
          <h1 className="text-[25px]">4 items in yoru cart</h1>
          <AiOutlineClose
            className="text-[25px]"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
