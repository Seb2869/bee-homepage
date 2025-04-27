import React from 'react';
import { BiLogoDiscordAlt, BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';

import Logo from '../assets/logo.webp';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black footer-top-left-sharp-edge-rectangle text-white w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4 pt-7 md:px-6 md:pt-8 lg:px-8 lg:pt-10 xl:pt-14 2xl:pt-16">
                <div className="flex flex-col items-center justify-center gap-y-2 md:gap-y-3 2xl:gap-y-4">
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
                    <p className="font-inter font-normal text-center text-xs leading-normal md:text-sm md:leading-relaxed lg:px-40 xl:text-base xl:px-56 2xl:text-lg 2xl:px-80">
                        <strong>Disclaimer:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit.
                    </p>
                </div>
                <button className="w-fit mx-auto flex items-center bg-primary text-black font-anton text-sm px-3 py-1 rounded gap-x-[3px] mt-5 md:mt-7 md:text-base md:gap-x-1 xl:text-lg xl:mt-8 xl:px-4 xl:rounded-md xl:py-2 2xl:text-xl 2xl:mt-10 2xl:rounded-lg">
                    <BiLogoDiscordAlt className="text-2xl md:text-3xl 2xl:text-4xl" />
                    <span>Join Our Discord</span>
                </button>
                <div className="grid grid-cols-1 border-b border-b-white border-opacity-30 text-sm font-anton text-center gap-y-2 py-5 md:grid-cols-5 md:gap-y-0 md:py-7 md:text-base xl:py-10 xl:text-xl 2xl:py-12 2xl:text-2xl">
                    <span>
                        <a href="">Home</a>
                    </span>
                    <span>
                        <a href="">About Us</a>
                    </span>
                    <span>
                        <a href="">Features</a>
                    </span>
                    <span>
                        <a href="">Contact</a>
                    </span>
                    <span>
                        <a href="">Launch App</a>
                    </span>
                </div>
                <div className="flex flex-col py-2 md:flex-row md:justify-between md:items-center">
                    <span className="text-xs">All rights reserved. Command Hive</span>
                    <div className="social-icons flex items-center text-primary text-xl gap-x-2 mt-2 md:text-2xl md:mt-0 2xl:text-3xl">
                        <a href="">
                            <BiLogoLinkedinSquare />
                        </a>
                        <a href="">
                            <BiLogoInstagramAlt />
                        </a>
                        <a href="">
                            <BiLogoFacebookCircle />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
