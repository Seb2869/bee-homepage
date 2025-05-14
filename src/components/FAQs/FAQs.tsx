import React, { useState } from 'react';
import { Question } from '../../models/common';
import { QuestionAccordion } from './QuestionAccordion';

import Mobile from '../../assets/FAQs/mobile.webp';

export const FAQs: React.FC = () => {
    const questions: Question[] = [
            {
                question: 'Do you store private key',
                description:
                    'Each agent has its own wallet, if you are building an AI agent that trades, just send funds to the agent address.',
            },
            {
                question: 'How do Command Hive agents stay ahead of trends',
                description:
                    'Our agents tap into Polymarket’s MCP to monitor news and trends in real time, ensuring they act on the latest insights for trading or betting.',
            },
            {
                question: 'Which tools do your agents connect with',
                description:
                    'Our Worker Bees integrate with platforms like GitHub, Quickswap, Uniswap, Polymarket, and more via MCPs.  ',
            },

            {
                question: 'Is Command Hive secure',
                description:
                    'We prioritize security with encrypted protocols and robust safeguards to protect your data and transactions.',
            },
        ],
        [selectedQuestion, setSelectedQuestion] = useState<number | null>(0);

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="section-container md:gap-x-4 xl:gap-x-16 2xl:gap-x-24">
                <div className="w-full flex justify-center md:w-2/5 md:justify-start">
                    <img
                        src={Mobile}
                        alt="Mobile"
                        className="w-1/2 md:w-[85%] xl:w-[90%]"
                    />
                </div>
                <div className="w-full md:w-3/5">
                    <h2 className="font-anton text-xl md:text-[22px] lg:text-2xl xl:text-4xl 2xl:text-5xl">
                        Frequently Asked Questions
                        <span className="text-primary">.</span>
                    </h2>
                    <div className="mt-4 flex flex-col gap-y-3 md:mt-6 lg:gap-y-4 xl:mt-8 xl:gap-y-5 2xl:mt-10 2xl:gap-y-6">
                        {questions.map((question, index) => (
                            <QuestionAccordion
                                key={index}
                                selectedQuestion={selectedQuestion}
                                index={index}
                                onSelectionChange={() =>
                                    setSelectedQuestion((prevSelectedQuestion) =>
                                        prevSelectedQuestion === index ? null : index,
                                    )
                                }
                                question={question}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
