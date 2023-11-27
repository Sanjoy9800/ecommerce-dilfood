"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Data from "@/utils/productData";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";

const DetailPage = () => {
  const params = useParams();

  const [productData, setProductData] = useState<any>();

  useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((item) => item.id.toString() === id)[0];
    // console.log(getProductData);

    setProductData(getProductData);
  }, [params.id]);

  return (
    <div className="pt-8">
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-400">
          <Link href="/" className="cursor-pointer hover:text-accent">
            Home
          </Link>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p>{productData?.name}</p>
        </div>
      </div>

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-full"
              src={productData?.img}
              width={1000}
              height={1200}
              alt={productData?.name}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-accent">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />

              <p className="text-gray-500 text-[14px] ml-2 hover:text-accent cursor-pointer">
                (8 customer review)
              </p>
            </div>

            <div className="text-[#161616] space-y-6">
              <h2 className="text-3xl font-semibold">{productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00</p>
            </div>

            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              neque quod nam labore aliquid quis iure enim similique nisi,
              consequatur, blanditiis beatae magnam ab. Exercitationem modi qui
              unde vitae nobis.
            </p>
            <p className="text-gray-500 text-[14px]">20 in stock</p>

            <button
              className="uppercase bg-accent py-4 px-4 rounded-lg text-white
           flex gap-2 items-center hover:bg-black"
            >
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to cart
            </button>

            <div className="flex gap-4 items-center uppercase py-4 text-[14px]">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart />
                Add to wish list
              </div>

              <div className="flex gap-1 items-center">
                <MdCompareArrows />
                Compare
              </div>
            </div>

            <div className="w-[30px] h-[2px] bg-gray-500">
              <div>Name:{productData?.name}</div>
              <div className="capitalize">
                category:{productData?.category[0]}
              </div>
              <div className="flex gap-1 items-center capitalize">
                Tags:{" "}
                {Array.isArray(productData?.category) &&
      productData?.category.map((item: any) => (
        <div key={item}>{item}</div>
      ))}
              </div>

              <div className="w-[30px] h-[2px] bg-gray-500" />
              <div className="flex gap-1 items-center text-[18px]">
                Share:{" "}
                <div className="flex gap-2 items-center text-[18px]">
                  <FaFacebook /> <FaTwitterSquare /> <FaInstagramSquare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
