import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';
import { Pages } from '../constants/common.constants';

export const AppLogo: React.FC = () => {
    return (
        <Link
            to={Pages.HOME}
            className="flex items-center justify-center gap-x-2"
        >
            <img
                src={Logo}
                alt="Logo"
                className="w-6 md:w-7 2xl:w-8"
            />
            <span className="font-anton font-normal leading-3 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                Command Hive
            </span>
        </Link>
    );
};
