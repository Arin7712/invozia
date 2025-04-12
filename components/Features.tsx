import { featureItems } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <div className="md:px-[22rem] px-6 md:py-[6rem] py-[2rem]">
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-3xl font-medium md:max-w-2xl">Features</h1>
          <p className="md:max-w-xl text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eius
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    featureItems.map((item, index) => (
                        <div key={index} className="rounded-md border-[1px] p-6 flex md:flex-col gap-6 items-center md:items-start text-start">
                            <div className="space-y-2">
                                <h1>{item.title}</h1>
                                <p className="text-sm text-zinc-300">{item.description}</p>
                            </div>
                            <div className="md:order-1 order-[-1]">
                                {item.icon}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
