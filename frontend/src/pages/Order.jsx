import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row gap-4 md:gap-6"
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <img
                className="w-16 sm:w-20"
                src={item.image[0]}
                alt="image des articles dans le panier"
              />
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-between flex-grow">
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg">
                  {currency}
                  {item.price}
                </p>
                <p>Quantity : 1</p>
                <p>Size : Medium</p>
              </div>
              <p className="mt-2">
                Date : <span className="text-gray-400">25, Jul, 2024</span>
              </p>
            </div>

            {/* Status Section */}
            <div className="flex items-center gap-2 text-gray-700 md:w-1/4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm md:text-base">Ready to ship</p>
            </div>
          <button className="border px-4  h-8 py-0.5 text-sm font-medium rounded-sm self-center">Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;