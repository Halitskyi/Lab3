import React from 'react';

const NetworkSidebar = () => {
    return (
        <div className="network-sidebar-container bg-gray-100 h-screen fixed left-0 top-0 border-r border-gray-300 z-50 width-48">
            <div className="flex flex-col items-center justify-top h-full width-48">
                <svg className="bar" width="48" height="6" fill="none">

                </svg>
                <button className="bg-blue-500 text-white rounded-full w-8 h-8 mt-4 mb-8 ">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1400863982/k1csefhgwhju2ojma181.png" alt="image1" className="w-full h-full rounded-full"/>
                </button>
                <button className="bg-blue-500 text-white rounded-full w-8 h-8 mb-8">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1400863982/k1csefhgwhju2ojma181.png" alt="image1" className="w-full h-full rounded-full"/>
                </button>
                <button className="bg-blue-500 text-white rounded-full w-8 h-8 mb-8">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1400863982/k1csefhgwhju2ojma181.png" alt="image1" className="w-full h-full rounded-full"/>
                </button>
                <button className="bg-blue-500 text-white rounded-full w-8 h-8 mb-8">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1400863982/k1csefhgwhju2ojma181.png" alt="image1" className="w-full h-full rounded-full"/>
                </button>
                <button className="bg-blue-500 text-white rounded-full w-8 h-8">
                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1400863982/k1csefhgwhju2ojma181.png" alt="image1" className="w-full h-full rounded-full"/>
                </button>

            </div>
        </div>
    )
}

export default NetworkSidebar;
