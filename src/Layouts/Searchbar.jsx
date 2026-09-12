import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";

function Searchbar() {
  return (
    <section className="bg-white">
      <div className="max-w-360 px-4 md:px-6 lg:px-0 mx-auto py-3 md:py-5">
        <div className="flex justify-between items-center">
          <p className="text-black text-[15px]md:text-xl hidden md:block md:flex gap-x-3 items-center">
            {" "}
            <MdOutlineLocalPhone /> +123 ( 456 ) ( 7890 )
          </p>

          <div className="flex items-center border border-border1 pr-2 relative md:w-80 rounded-xl">
            <input
              type="text"
              placeholder="Search for items...."
              className=" px-2 py-2 md:py-3 focus:outline-0 w-[80%] md:w-65 text-xs md:text-[16px]"
            />
            <div className="bg-primary absolute right-0 h-full text-white text-[15px] w-8 flex justify-center items-center rounded-r">
              <FiSearch />
            </div>
          </div>

          <div className="flex items-center gap-x-3 lg:gap-x-8">
            <div className="flex items-center gap-x-2 text-[15px] font-medium text-black cursor-pointer">
              <MdOutlineAccountCircle className="size-6" />
              <span className="hidden md:block">Account</span>
            </div>
            <div className="flex items-center gap-x-2 text-[15px] font-medium text-black cursor-pointer">
              <FaRegHeart className="size-6" />

              <span className="hidden md:block">Wishlist</span>
            </div>
            <div className="flex items-center gap-x-2 text-[15px] font-medium text-black cursor-pointer">
              <BsCart3 className="size-6" />
              <span className="hidden md:block">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Searchbar;
