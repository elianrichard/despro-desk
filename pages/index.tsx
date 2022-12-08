import Image from "next/image";
import { useQueries } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import ItemCard from "../modules/ItemCard";
import { CounterType } from "../modules/types";

import LayoutImage from "../asset/images/layout.png";

export default function Home() {
  const fetchAPI = (URL: string) => {
    return axios.get(URL);
  };

  const apiKeys = [
    "https://api.thingspeak.com/channels/1942989/feeds.json?results=1",
    "https://api.thingspeak.com/channels/1974063/feeds.json?results=1",
    "https://api.thingspeak.com/channels/1974067/feeds.json?results=1",
    "https://api.thingspeak.com/channels/1974060/feeds.json?results=1",
    "https://api.thingspeak.com/channels/1974062/feeds.json?results=1",
    "https://api.thingspeak.com/channels/1974064/feeds.json?results=1",
  ];

  const counterQueries = useQueries({
    queries: apiKeys.map((key, i) => {
      return {
        queryKey: ["counter", i],
        queryFn: (): Promise<AxiosResponse<CounterType>> => fetchAPI(key),
        refetchInterval: 1000,
      };
    }),
  });

  return (
    <>
      <Head>STUDENT CORNER OCCUPANCY COUNTER</Head>
      <div className="layout-bg flex min-h-screen w-screen flex-col items-center justify-center gap-10 py-20">
        <div className="layout-image-bg mx-4 flex h-fit items-center justify-center rounded-xl p-1 sm:w-4/5 sm:p-5 md:p-8 lg:h-80">
          <Image
            src={LayoutImage}
            alt="sc-layout"
            className="h-full object-contain"
          />
        </div>
        <div className="flex w-4/5 flex-wrap justify-center gap-10">
          {counterQueries.map((el, i) => (
            <ItemCard
              key={i}
              title={el.data?.data.channel.name}
              data={el.data?.data.feeds[0].field1}
              isLoading={el.isLoading}
              index={i}
              isSingle={i == apiKeys.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
