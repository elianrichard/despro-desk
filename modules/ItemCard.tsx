import React from "react";

const ItemCard = () => {
  return (
    <div className="flex aspect-square h-32 flex-col overflow-hidden rounded-xl bg-white md:h-40">
      <div className="flex h-full w-full text-2xl font-bold md:text-3xl">
        <div className="flex h-full flex-1 items-center justify-center bg-gradient-to-tr from-green-100 via-green-300 to-green-500">
          A
        </div>
        <div className="flex h-full flex-1 items-center justify-center bg-gradient-to-tr from-green-100 via-green-300 to-green-500">
          B
        </div>
      </div>
      <div className="flex justify-center bg-black py-2 font-bold text-white">
        MEJA 1
      </div>
    </div>
  );
};

export default ItemCard;
