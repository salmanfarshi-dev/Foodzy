import React from "react";

const shopping = ["/shoping (1).png", "/shoping (2).png", "/shoping (3).png"];
function Home() {
  return (
    <>
      {/* ============= 
     banner section start
     ================= */}

      <div className="w-full h-[80vh]">
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
            <img src={items} alt="" className="w-[33%]" />
          ))}
        </div>
      </section>
      {/* ============= 
     shoping section end
     ================= */}
    </>
  );
}

export default Home;
