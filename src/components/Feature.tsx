import React from "react";
import Featurecart from "./Featurecart";

const data = [
  {
    img: "/head.png",
    title: "New headphone",
    desc: "Awsome sound and feature",
  },
  {
    img: "/pay.png",
    title: "Secure Payment",
    desc: "Fully protected while paying online",
  },

  {
    img: "/ship.png",
    title: "Free Shipping",
    desc: "Free shipping on all order $99",
  },
];

const Feature = () => {
  return <div className="container pt-16">
    <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4 ">
       {data.map(i=> <Featurecart key={i.title} img={i.img} title={i.title} desc={i.desc}/>)}
    </div>
  </div>;
};

export default Feature;
