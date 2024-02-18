"use client";
import React from 'react';
import {integrations} from "../DataCheck/index";

const CheckFeatures = () => {
    return (
        <div>
            <div>
                <ul>
                    {integrations.map((item, idx) => (
                        <li>
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                            </div>
                            <span>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default CheckFeatures;
