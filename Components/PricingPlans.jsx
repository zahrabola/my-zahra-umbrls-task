"use client";
import React from 'react';
import { dataPricingPlans } from "../DataPrice/index";

const PricingPlans = () => {
    return (
        <div>
            <div>
        {dataPricingPlans.map((plan) => (
            <div key={plan.title}>

                <h3>{plan.title}</h3>
                </div>
        ))}
            </div>
        </div>
    );
}

export default PricingPlans;
