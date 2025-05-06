import { motion } from 'framer-motion';
import React from 'react';
import { Question } from '../../models/common';

import Plus from '../../assets/icons/plus.svg';
import Subtract from '../../assets/icons/subtract.svg';

type QuestionAccordionProps = {
    question: Question;
    onSelectionChange: () => void;
    index: number;
    selectedQuestion: number | null;
};

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({
    question,
    onSelectionChange,
    index,
    selectedQuestion,
}) => {
    return (
        <div
            className="bg-white cursor-pointer border border-[#000000] border-opacity-15 rounded xl:rounded-md 2xl:rounded-lg"
            onClick={onSelectionChange}
        >
            <div className="flex items-center justify-between gap-x-4 font-anton font-normal leading-3 p-4 lg:p-5 2xl:p-6">
                <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl">
                    {question.question}
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
                    {question.description}
                </p>
            </motion.div>
        </div>
    );
};
