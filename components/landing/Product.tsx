import React from "react";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";

import { useAppDispatch } from "../../redux/hooks";
import { addToBasket } from "../../redux/basketSlice";

type ProductProps = {
  product: IProduct;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="space- flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        <div className="basket" onClick={addItemToBasket}>
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};
export default Product;
