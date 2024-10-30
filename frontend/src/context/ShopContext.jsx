import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [CartItems, setCartItems] = useState({});
  const navigate = useNavigate ();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("select Product size Please", {
        className: "bg-red rounded-lg border-gray-800 shadow-lg",
      });
      {
        /* modifier le style plus tard avec un fichier css style  */
      }
      return;
    }
    let cartData = structuredClone(CartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in CartItems) {
      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalCount += CartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(CartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };
  const getCartAmount =  () => {
    let totalAmount = 0;
    for (const items in CartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in CartItems[items]) {
        try {
          if (CartItems[items][item] > 0) {
            totalAmount += itemInfo.price * CartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    CartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
