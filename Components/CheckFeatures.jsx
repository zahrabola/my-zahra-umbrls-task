"use client";
import React from "react";
import { integrations } from "../DataCheck/index";

const CheckFeatures = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 pt-2 pb-2 items-center justify-center">
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => (
            <li className="border rounded-lg">
              <div className="flex items-center gap-x-3 p-4" key={index}>
                <div className="bg-white w-14 h-14  flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base text-gray-800 font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
              <span>
                <div className="flex  max-w-80 items-center gap-x-3 ml-16 pl-5  pb-8 ">
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckFeatures;
