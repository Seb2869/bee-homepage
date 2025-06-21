import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { LAUNCH_APP_URL, menuItems } from '../../constants/common.constants';
import { AppLogo } from '../AppLogo';

export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false),
        { pathname } = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <div className="relative flex items-center justify-between bg-white border-b border-b-[#000000] z-10 border-opacity-15 w-full max-w-screen-2xl mx-auto px-4 py-2 md:px-6 lg:hidden">
                <AppLogo />
                <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    {isOpen ? <BiX size={26} /> : <BiMenu size={26} />}
                </button>
            </div>

            <motion.div
                initial={false}
                animate={isOpen ? { top: '44px' } : { top: '-400px' }}
                className="absolute left-0 -top-[400px] h-fit p-4 z-[9] w-full bg-white"
            >
                <div className="text-sm flex flex-col font-anton text-center gap-y-2 md:text-base lg:hidden">
                    {menuItems.slice(0, menuItems.length - 1).map((item, index) =>
                        !item.isOutsideLink ? (
                            <NavLink
                                to={item.link}
                                key={index}
                                className={({ isActive }) => (isActive ? 'text-primary' : 'text-black')}
                            >
                                {item.title}
                            </NavLink>
                        ) : (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                className="font-medium flex justify-center items-center gap-x-[3px] xl:text-base 2xl:text-lg"
                            >
                                <span>{item.title}</span>
                                <FaArrowUp
                                    size={16}
                                    className="rotate-45"
                                />
                            </a>
                        ),
                    )}
                    <a
                        href={LAUNCH_APP_URL}
                        target="_blank"
                        className="w-fit mx-auto flex items-center bg-primary text-black font-anton text-sm px-3 py-1 rounded gap-x-[3px] mt-5 md:mt-7 md:text-base md:gap-x-1 xl:text-lg xl:mt-8 xl:px-4 xl:rounded-md xl:py-2 2xl:text-xl 2xl:mt-10 2xl:rounded-lg"
                    >
                        LAUNCH APP
                    </a>
                </div>
            </motion.div>
        </>
    );
};
