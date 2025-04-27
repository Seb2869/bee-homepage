import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Mobile from '../assets/FAQs/mobile.webp';
import Plus from '../assets/icons/plus.svg';
import Subtract from '../assets/icons/subtract.svg';

type Question = {
    question: string;
    description: string;
};

export const FAQs: React.FC = () => {
    const questions: Question[] = [
            {
                question: 'Lorem ipsum dolor',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            },
            {
                question: 'Lorem ipsum dolor sit amet',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            },
            {
                question: 'Lorem ipsum dolor sit amet consectetur adipiscing',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            },
            {
                question: 'Lorem ipsum dolor sit amet consectetur',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            },
        ],
        [selectedQuestion, setSelectedQuestion] = useState<number | null>(0);

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-7 flex flex-col gap-y-3 md:flex-row md:items-start md:gap-x-4 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:py-14 xl:gap-x-16 2xl:py-16 2xl:gap-x-24">
                <div className="w-full flex justify-center md:w-2/5 md:justify-start">
                    <img
                        src={Mobile}
                        alt="Mobile"
                        className="w-1/2 md:w-[85%] xl:w-full"
                    />
                </div>
                <div className="w-full md:w-3/5">
                    <h2 className="font-anton text-xl md:text-[22px] lg:text-2xl xl:text-4xl 2xl:text-5xl">
                        Frequently Asked Questions
                        <span className="text-primary">.</span>
                    </h2>
                    <p className="font-inter font-normal text-xs leading-normal mt-3 md:mt-4 md:text-sm md:leading-relaxed xl:text-base xl:mt-5 2xl:text-lg 2xl:mt-6">
                        Our agents are connected with polymarket MCP, so that they can understand the latest news and
                        trends, thus be first to add, modify bets on polymarketcap.
                    </p>
                    <div className="mt-8 flex flex-col gap-y-3 md:mt-10 lg:gap-y-4 xl:mt-14 xl:gap-y-5 2xl:mt-16 2xl:gap-y-6">
                        {questions.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white cursor-pointer border border-[#000000] border-opacity-15 rounded xl:rounded-md 2xl:rounded-lg"
                                onClick={() =>
                                    setSelectedQuestion((prevSelectedQuestion) =>
                                        prevSelectedQuestion === index ? null : index,
                                    )
                                }
                            >
                                <div className="flex items-center justify-between gap-x-4 font-anton font-normal leading-3 p-4 lg:p-5 2xl:p-6">
                                    <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl">
                                        {item.question}
                                        <span className="text-primary"> ?</span>
                                    </h3>
                                    <button>
                                        <img
                                            src={selectedQuestion === index ? Subtract : Plus}
                                            alt={selectedQuestion === index ? 'Subtract' : 'Plus'}
                                            className="w-4 lg:w-5 2xl:w-6"
                                        />
                                    </button>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: selectedQuestion === index ? 'auto' : 0,
                                        opacity: selectedQuestion === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden border-t border-t-[#000000] border-opacity-15"
                                >
                                    <p className="font-inter font-normal text-xs leading-normal p-4 md:text-sm md:leading-relaxed lg:p-5 xl:text-base 2xl:text-lg 2xl:p-6">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
