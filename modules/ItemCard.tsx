import React from "react";

interface Props {
  data: string | undefined;
  title: string | undefined;
  isLoading: boolean;
  index: number;
  isSingle: boolean;
}

const ItemCard = ({ data, title, isLoading, index, isSingle }: Props) => {
  const classGreen = "from-green-100 via-green-300 to-green-500";
  const classOff = "from-slate-200 via-slate-400 to-slate-500";
  const classRed = "from-red-200 via-red-400 to-red-600";
  return (
    <div className="flex aspect-square h-32 flex-col overflow-hidden rounded-xl bg-white md:h-40">
      <div className="flex h-full w-full text-2xl font-bold md:text-3xl">
        <div
          className={`flex h-full flex-1 items-center justify-center bg-gradient-to-tr ${
            isLoading
              ? classOff
              : data == "3" || data == "1"
              ? classGreen
              : classRed
          }`}
        >
          {!isSingle && "A"}
        </div>
        {!isSingle && (
          <div
            className={`flex h-full flex-1 items-center justify-center bg-gradient-to-tr ${
              isLoading
                ? classOff
                : data == "3" || data == "2"
                ? classGreen
                : classRed
            }`}
          >
            B
          </div>
        )}
      </div>
      <div className="flex justify-center bg-black py-2 font-bold text-white">
        {title || `MEJA ${index + 1}`}
      </div>
    </div>
  );
};

export default ItemCard;
