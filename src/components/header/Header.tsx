import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { LAUNCH_APP_URL, menuItems } from '../../constants/common.constants';
import { AppLogo } from '../AppLogo';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
    return (
        <header className="w-full fixed top-0 left-0 text-black z-50">
            <MobileMenu />

            <div className="hidden relative w-full max-w-[1880px] mx-auto px-6 lg:flex lg:justify-between lg:items-end lg:gap-x-4 lg:px-8 xl:gap-x-5 xl:px-32">
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
                                {!item.isOutsideLink ? (
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            `text-sm font-medium xl:text-base 2xl:text-lg ${isActive ? 'cursor-default after:content-[""] after:w-1/2 after:h-[6px] after:bg-primary after:absolute after:-bottom-[6px] after:left-0' : 'xl:hover:text-primary'}`
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                ) : (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="text-sm font-medium flex items-center gap-x-[2px] hover:text-primary xl:text-base 2xl:text-lg"
                                    >
                                        <span>{item.title}</span>
                                        <FiArrowUpRight size={18} />
                                    </a>
                                )}
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
