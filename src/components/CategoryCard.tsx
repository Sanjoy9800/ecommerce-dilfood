import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  type: string;
  quantity: string;
}

const CategoryCard = ({ img, type, quantity }: propsType) => {
  return (
    <div className="space-y-4">
      <Image
        className="rounded-full border-4 md:border-8 border-red-600"
        src={img}
        alt={type}
        width={600}
        height={500}
      />

      <div>
        <h2 className="text-[14px] md:text-xl font-medium text-red-700">{type}</h2>
        <p className="text-red-600 text-[12px] md:text-[14px]">{quantity}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
