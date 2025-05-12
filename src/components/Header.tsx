import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { LAUNCH_APP_URL, menuItems } from '../constants/common.constants';
import { AppLogo } from './AppLogo';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 text-black z-50">
            <div className="relative flex items-center justify-between bg-white border-b border-b-[#000000] border-opacity-15 w-full max-w-screen-2xl mx-auto px-4 py-2 md:px-6 lg:hidden">
                <AppLogo />
                <BiMenu
                    size={26}
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                />
            </div>

            <AnimatePresence>
                {isOpen && (
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
                                <NavLink
                                    to={item.link}
                                    key={index}
                                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-black')}
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                            <a
                                href={LAUNCH_APP_URL}
                                target="_blank"
                                className="w-fit mx-auto flex items-center bg-primary text-black font-anton text-sm px-3 py-1 rounded gap-x-[3px] mt-5 md:mt-7 md:text-base md:gap-x-1 xl:text-lg xl:mt-8 xl:px-4 xl:rounded-md xl:py-2 2xl:text-xl 2xl:mt-10 2xl:rounded-lg"
                            >
                                LAUNCH APP
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden relative w-full max-w-[1800px] mx-auto px-6 lg:flex lg:justify-between lg:items-end lg:gap-x-4 lg:px-8 xl:gap-x-5 xl:px-32">
                <div
                    id="navbar"
                    className="bg-white flex-1 flex relative items-center justify-between"
                >
                    <div className="bg-white h-full w-1/2 absolute right-full"></div>
                    <AppLogo />
                    <nav className="z-10 flex items-center gap-x-8 py-3 pr-6 xl:gap-x-12 xl:py-4 xl:pr-12">
                        {menuItems.slice(0, menuItems.length - 1).map((item, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                <NavLink
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `text-sm font-medium xl:text-base 2xl:text-lg ${isActive ? 'cursor-default after:content-[""] after:w-1/2 after:h-[6px] after:bg-primary after:absolute after:-bottom-[6px] after:left-0' : 'xl:hover:text-primary'}`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            </div>
                        ))}
                    </nav>
                    <div className="bg-white header-navbar absolute top-0 -right-11 w-44 h-full z-9 lg:w-[172px] xl:w-56 xl:-right-14"></div>
                </div>
                <a
                    href={LAUNCH_APP_URL}
                    target="_blank"
                    className="bg-primary h-fit rounded text-black font-anton angled-left-rectangle text-base py-1 pr-3 pl-10 lg:py-[6px] lg:pr-4 xl:pr-8 xl:pl-16 xl:rounded-md xl:py-2 xl:text-lg 2xl:rounded-lg 2xl:text-xl"
                >
                    LAUNCH APP
                </a>
            </div>
        </header>
    );
};
