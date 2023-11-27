import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu,AiOutlineShoppingCart } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";

const Navbar = ({setShowCart}:any) => {

 const cartCount= useAppSelector((state) => state.cartReducer.length)


  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <AiOutlineMenu className="sm:hidden text-[26px]" />
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>

        {/* nav section */}
        <ul className="gap-6 hidden sm:flex font-light">
          <Link href="/" className="navlink">
            Home
          </Link>
          <li className="navlink">Blog</li>
          <li className="navlink">Shop</li>
          <li className="navlink">Pages</li>
          <li className="navlink">Contact</li>
        </ul>

        {/* cart section */}
        <div className="flex gap-6 text-[26px]">
          <div className="relative cursor-pointer" onClick={()=>setShowCart(true)}>
          <AiOutlineShoppingCart />
          <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
            {cartCount}
          </div>
          </div>
          <TbSearch />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
