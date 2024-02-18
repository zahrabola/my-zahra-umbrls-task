"use client";
import React from "react";
import { dataPricingPlans } from "../DataPrice/index";

const PricingPlans = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-content: center">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 lg:px-8 sm:px-6 gap-8 ">
        {dataPricingPlans.map((plan) => (
          <div
            key={plan.title}
            className=" flex flex-col border border-slate-200 p-4 mt-2 rounded-2xl bg-white shadow-md p-8"
          >
            <h3 className="text-lg leading-5">{plan.title}</h3>
            <div>
              <p>
                <span>{plan.currency}</span>
                <span>{plan.price}</span>
                <span>{plan.frequency}</span>
              </p>
              <p>{plan.description}</p>
            </div>
            {/* features */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
