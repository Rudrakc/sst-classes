// import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.js";
import { useRef } from "react";

function ProductCard({ product }) {
  return (
    <div className=" my-6 flex w-[70%] items-center justify-between   p-10 shadow-lg rounded-lg gap-4">
      <div className="">
        <img src={product.images[0]} className="w-1/2 object-contain "></img>
      </div>
      <div className="flex flex-col w-full items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {product.title}
          </h2>
          <p className="inline-block px-3 py-1 text-sm font-semibold  bg-gray-200 rounded-full mt-2">
            {product.category}
          </p>

          <p className="show text-lg text-gray-600 mt-2">
            {" "}
            Rs {product.price.value}
          </p>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
export default ProductCard;
