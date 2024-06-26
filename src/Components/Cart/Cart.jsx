import { useContext } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import CartContext from "../../Context/CartContext";

function Cart() {
  const cc = useContext(CartContext);
  const cart = cc.cart;
  return (
    <div className="w-full">
      <Sheet>
        <SheetTrigger>
          <button className="px-8 py-2 rounded-full bg-[#2b2b2b] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#2b2b2b]">
            CART
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription>
              <ul className="divide-y divide-gray-200">
                {Object.keys(cart).map((key) => (
                  <li
                    key={key}
                    className="py-2 flex justify-between items-center"
                  >
                    <span className="text-gray-700 text-lg">
                      {cart[key].title}
                    </span>
                    <span className="text-gray-700 font-semibold">
                      x{cart[key].quanitity}
                    </span>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Cart;
