import React from "react";
import SideHeading from "../Components/SideHeading";

const shopping = ["/shoping (1).png", "/shoping (2).png", "/shoping (3).png"];
function Home() {
  return (
    <>
      {/* ============= 
     banner section start
     ================= */}

      <div className="w-full md:h-[80vh]">
        <img src="/banner.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* ============= 
     banner section end
     ================= */}

      {/* ============= 
     shoping section start
     ================= */}

      <section className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 mt-4 md:mt-7 lg:mt-12">
        <div className="flex items-center gap-3">
          {shopping.map((items) => (
            <img
              src={items}
              alt=""
              className="w-[31%] md:w-[33%] lg:h-70 object-cover"
            />
          ))}
        </div>

        {/* ============= 
     shoping section end
     ================= */}
        {/* ============= 
     Popular Products section start
     ================= */}

        <div className=" mt-5 md:mt-10 lg:mt-14">
          <SideHeading tittle="Popular Products" />

          <div className="mt-3 md:mt-8 lg:mt-11"></div>
        </div>

        {/* ============= 
     Popular Products section end
     ================= */}
      </section>
    </>
  );
}

export default Home;
