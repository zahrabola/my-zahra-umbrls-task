"use client";
import React from "react";
import { dataPricingPlans } from "../DataPrice/index";
import Image from "next/image";
import tick from "../public/tick.png";
import cross from "../public/cross.png";

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

            <div>
                <ul>
                    {plan.features.map((feature) => (
                        <li key={feature}>
                            <Image
                             src={tick}
                             width={10}
                             height={10}
                             alt="tick"
                             className="float-left"/>
                             <span>{feature}</span>
                        </li>
                    ))}
                      {/* nonsupport*/}
                      {plan.nonSupport && (
                         <li >
                         <Image
                           src={cross}
                           width={10}
                           height={10}
                           alt="cross"
                           className="float-left"
                         />
                         <span >6 Month Premium Support</span>
                       </li>
                      )}
                      {/* nonupdate*/}
                      {plan.nonUpdates && (
                  <li className="text-sm">
                    <Image
                      src={cross}
                      width={10}
                      height={10}
                      alt="cross"
                      className="float-left"
                    />
                    <span>Lifetime Updates</span>
                  </li>
                )}
                </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
