function Cart({ cart }) {
  return (
    <div className="w-full mx-auto mt-6">
      <div className=" p-10  shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart</h1>
        <ul className="divide-y divide-gray-200">
          {Object.keys(cart).map((key) => (
            <li key={key} className="py-2 flex justify-between items-center">
              <span className="text-gray-700 text-lg">{cart[key].title}</span>
              <span className="text-gray-700 font-semibold">
                x{cart[key].quanitity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
