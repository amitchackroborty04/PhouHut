import React from "react";
import { Button } from "../ui/button";
import MobileCard from "../common/MobileCard";

const Available = () => {

      const phones = [
    { id: 1, title: "iPhone 15 Pro", price: 999, image: "/assets/mobile.png" },
    { id: 2, title: "Samsung S24", price: 899, image: "/assets/mobile.png" },
    { id: 2, title: "Samsung S24", price: 899, image: "/assets/mobile.png" },
    { id: 2, title: "Samsung S24", price: 899, image: "/assets/mobile.png" },
    { id: 2, title: "Samsung S24", price: 899, image: "/assets/mobile.png" },
    { id: 2, title: "Samsung S24", price: 899, image: "/assets/mobile.png" },
  ];
  return (
    <section>
      <div className=" container mx-auto py-10">
        <div className=" flex justify-between items-center">
          <h2 className="text-2xl lg:text-4xl text-white font-semibold ">
            Available Phones
          </h2>
          <Button className="text-base md:text-[18px] bg-[#FF6900] h-[35px] md:h-[48px] hover:bg-[#FF6900]/90 rounded-[8px]">
            Explore More
          </Button>
        </div>
         <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 gap-y-4 md:gap-6">
          {phones.slice(0, 4).map((phone) => (
            <MobileCard
              key={phone.id}
              title={phone.title}
              price={phone.price}
              image={phone.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Available;
