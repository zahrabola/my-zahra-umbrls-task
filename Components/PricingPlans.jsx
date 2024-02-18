"use client";
import React from "react";
import { dataPricingPlans } from "../DataPrice/index";
import Image from "next/image";
import tick from "../public/tick.png";
import cross from "../public/cross.png";
import Link from "next/link";
import arrow from "../public/arrow.png"
import arrow2 from "../public/arrow2.png"


const PricingPlans = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-content: center">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 lg:px-8 sm:px-6 gap-8 ">
        {dataPricingPlans.map((plan) => (
          <div
            key={plan.title}
            className=" flex flex-col border border-slate-200 p-4 mt-2 rounded-2xl bg-white shadow-md p-8"
          >
            <h3 className="text-lg leading-5 text-indigo-600 ">{plan.title}</h3>
            <div className="mt-2 p-6 ">
              <p className="text-sm font-semi-bold item-center">
                <span>{plan.currency}</span>
                <span className="text-4xl font-bold ml-3 ">{plan.price}</span>
                <span className=" ml-1">{plan.frequency}</span>
              </p>
              <p className=" text-sm text-gray-400 leading-6">
                {plan.description}
              </p>
            </div>
            {/* features */}

            <div>
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li className="text-sm" key={feature}>
                    <Image
                      src={tick}
                      width={10}
                      height={10}
                      alt="tick"
                      className="float-left"
                    />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
                {/* nonsupport*/}
                {plan.nonSupport && (
                  <li className="text-sm">
                    <Image
                      src={cross}
                      width={10}
                      height={10}
                      alt="cross"
                      className="float-left"
                    />
                    <span className="ml-3">6 Month Premium Support</span>
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
                    <span className="ml-3">Lifetime Updates</span>
                  </li>
                )}
              </ul>
            </div>
            {/* button*/}
            <div>
              <Link href="#">
                <button  className={`mt-8 block px-6 py-4 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700 shadow-md
                ${
                  plan.mostPopular
                    ? "text-white bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700 shadow-md"
                    : "text-indigo-600  bg-violet-50 hover:bg-violet-100 "
                }
                `}>
                  {" "}
                  <span className="mr-3">{plan.cta}</span>{" "}
                  {
                  plan.mostPopular ?
                  <Image
                    src={arrow}
                    width={12}
                    height={12}
                    alt="cross"
                    className="float-right mt-2"
                  /> : 
                  <Image
                  src={arrow2}
                  width={12}
                  height={12}
                  alt="cross"
                  className="float-right mt-2"
                />}
                </button>
              </Link>
            </div>
            <div className="mt-2 p-6 ">
              <p className=" text-sm text-gray-400 leading-6">{plan.credit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
