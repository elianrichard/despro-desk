import Image from "next/image";
import ItemCard from "../modules/ItemCard";

import LayoutImage from "../asset/images/layout.png";

export default function Home() {
  return (
    <div className="layout-bg flex min-h-screen w-screen flex-col items-center justify-center gap-10 py-20">
      <div className="h-fit lg:h-80 mx-4 sm:w-4/5 rounded-xl layout-image-bg p-1 sm:p-5 md:p-8 flex justify-center items-center">
        <Image
          src={LayoutImage}
          alt="sc-layout"
          className="h-full object-contain"
        />
      </div>
      <div className="flex w-4/5 flex-wrap justify-center gap-10">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}
