import { stepItems } from "@/constants";
import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
      <div className="flex md:flex-row flex-col justify-between items-center md:text-start text-center">
        <h1 className="text-3xl font-medium md:max-w-2xl">How to install</h1>
        <p className="max-w-sm text-zinc-300">Lorem ipsum dolor sit amet consectetur elit adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className="pt-[4rem] flex flex-col gap-[4rem]">
        {stepItems.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col gap-6 items-center text-start"
          >
            <Image src={item.img} alt='img' width={500} height={500} className="rounded-md"/>
            <div className="flex flex-col gap-6">
            <div className="">{item.icon}</div>
            <div className="space-y-2">
              <h1>{index + 1}. {item.title}</h1>
              <p className="text-sm text-zinc-500">{item.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
