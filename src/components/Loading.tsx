import React from 'react';

export const Loading: React.FC = () => {
    return (
        <div className="loading-container w-screen h-screen bg-white flex justify-center items-center">
            <div className="flex items-center gap-x-2 xl:gap-x-3">
                <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin md:w-7 md:h-7 xl:w-8 xl:h-8 xl:border-[6px]"></div>
                <span className="text-xl font-medium md:text-2xl xl:text-3xl">Loading...</span>
            </div>
        </div>
    );
};
