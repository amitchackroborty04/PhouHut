import Image from 'next/image';
import React from 'react';
interface MobileCardProps {
  image: string;
  title: string;
  price: number;
}

const MobileCard = ({ image, title, price,  }: MobileCardProps) => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white/50 border-2 border-[#FF6900] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,105,0,0.5)]">
      {/* Phone Image */}
      <Image
        className="w-full h-auto md:h-64 object-cover rounded-tl-[4px] rounded-tr-[4px]" 
        src={image} 
        alt={title} 
        width={1000}
        height={1000}
      />

      <div className="px-6 py-4 text-center">
        {/* Title */}
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        
        {/* Price */}
        <p className="text-blue-600 font-semibold text-lg mb-4">
          ${price}
        </p>

        {/* See Details Button */}
        <button 
          className="w-full bg-[#FF6900] hover:bg-[#FFA500] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MobileCard;