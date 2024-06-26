import React from "react";
import Cart from "../Cart/Cart";

function Navbar() {
  return (
    <div className="flex justify-between py-4 px-8 items-center fixed left-0 top-0 right-0 bg-white/40 backdrop-blur-lg">
      <div>
        <p className="text-3xl font-bold">Baazaar.com</p>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default Navbar;
