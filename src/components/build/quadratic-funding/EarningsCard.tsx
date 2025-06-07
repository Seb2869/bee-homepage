import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import QuadraticEquation from '../../../assets/build/quadratic-funding/quadratic-equation.svg';

export const EarningsCard: React.FC<{ earnings: number }> = ({ earnings }) => {
    return (
        <div className="w-full flex flex-col gap-y-4 md:w-1/2 lg:w-2/5 lg:gap-y-5 xl:gap-y-6">
            <div className="bg-white text-primary flex flex-col items-center top-right-sharp-edge-rectangle-black p-4 lg:p-6 xl:p-10">
                <p className="section-body !font-medium">YOUR EARNINGS</p>
                <h2 className="main-title mt-3">$ {parseFloat(earnings.toFixed(2)).toLocaleString()}</h2>
                <div className="text-black text-center flex flex-col items-center mt-3 xl:mt-6">
                    <BiInfoCircle className="text-primary text-lg my-2 xl:text-xl" />
                    <p className="section-body">Know more about how does this works.</p>
                    <a
                        href="https://qf.gitcoin.co/?grant=&grant=&grant=&grant=&match=1000"
                        target="_blank"
                        className="section-body !font-bold !underline !underline-offset-4 hover:text-primary"
                    >
                        Quadratic Funding
                    </a>
                </div>
            </div>
            <div className="bg-white flex items-center justify-between px-4 py-2 md:py-3">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full bg-opacity-30 p-[6px] mr-3 hidden xl:inline-block">
                        <div className="w-full h-full rounded-full bg-primary"></div>
                    </div>
                    <h3 className="section-subheading text-black">Quadratic Equation We Use:</h3>
                </div>
                <div className="w-[35%] flex justify-end">
                    <img
                        src={QuadraticEquation}
                        alt="Quadratic Equation"
                    />
                </div>
            </div>
        </div>
    );
};
