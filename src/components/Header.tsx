import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

import Logo from '../assets/logo.webp';
import { menuItems } from '../constants/common.constants';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 left-0 text-black">
            <div className="relative bg-white border-b border-b-[#000000] border-opacity-15 flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-2 md:px-6 lg:hidden">
                <div className="flex items-center justify-center gap-x-2">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-6 md:w-7 2xl:w-8"
                    />
                    <span className="font-anton font-normal leading-3 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                        Command Hive
                    </span>
                </div>
                <BiMenu
                    size={26}
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                />
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ delay: isOpen ? 0 : 0.2, duration: 0.3, ease: 'easeInOut' }}
                className="absolute left-0 top-[44px] h-fit p-4 w-full bg-white md:top-[48px]"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: isOpen ? 0.4 : 0, duration: 0.1, ease: 'easeInOut' }}
                    className="text-sm flex flex-col font-anton text-center gap-y-2 md:text-base lg:hidden"
                >
                    {menuItems.slice(0, menuItems.length - 1).map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                        >
                            {item.title}
                        </a>
                    ))}
                    <button className="w-fit mx-auto flex items-center bg-primary text-black font-anton text-sm px-3 py-1 rounded gap-x-[3px] mt-5 md:mt-7 md:text-base md:gap-x-1 xl:text-lg xl:mt-8 xl:px-4 xl:rounded-md xl:py-2 2xl:text-xl 2xl:mt-10 2xl:rounded-lg">
                        Launch App
                    </button>
                </motion.div>
            </motion.div>
        </header>
    );
};
