import React from 'react';

const Toggle = () => {
    return (
        <div>
           
           <div  className="relative  max-w-screen-xl mx-auto justify-center text-center ">
            <label class="inline-flex items-center me-5 cursor-pointer">
                <input  type="checkbox" value="" class="sr-only peer" />
                <span  class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly</span>
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" >Yearly</span>
                <span class="ms-3 text-sm font-medium text-indigo-600 dark:text-gray-300 bg-indigo-50 rounded-lg px-2 py-2">Save 25%</span>
            </label>
           </div>
        </div>
    );
}

export default Toggle;
