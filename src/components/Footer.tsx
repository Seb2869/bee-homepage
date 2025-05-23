import React from 'react';
import { BiLogoDiscordAlt, BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { DISCORD_URL, menuItems, SocialHandleLinks } from '../constants/common.constants';

import { AppLogo } from './AppLogo';

type SocialHandle = {
    name: string;
    link: string;
    icon: React.ReactNode;
};

export const Footer: React.FC = () => {
    const socialHandles: SocialHandle[] = [
        {
            name: 'linkedIn',
            link: SocialHandleLinks.LINKEDIN,
            icon: <BiLogoLinkedinSquare />,
        },
        {
            name: 'instagram',
            link: SocialHandleLinks.INSTAGRAM,
            icon: <BiLogoInstagramAlt />,
        },
        {
            name: 'facebook',
            link: SocialHandleLinks.FACEBOOK,
            icon: <BiLogoFacebookCircle />,
        },
    ];

    return (
        <footer className="bg-black top-left-sharp-edge-rectangle text-white w-full">
            <div className="app-container !pb-0 pt-7 md:pt-8 md:pb-0 lg:pt-10 lg:pb-0 xl:pt-14 2xl:pt-16">
                <div className="flex flex-col items-center justify-center gap-y-2 md:gap-y-3 2xl:gap-y-4">
                    <AppLogo />
                    <p className="section-body text-center lg:px-40 xl:px-56 2xl:px-80">
                        <strong>Disclaimer:</strong> Command Hive’s AI agents are designed to enhance efficiency but
                        rely on user-defined prompts. Results depend on configuration and market conditions. Always
                        review settings and monitor performance.
                    </p>
                </div>
                <a
                    href={DISCORD_URL}
                    target="_blank"
                    className="btn-primary mx-auto flex items-center gap-x-[3px] mt-5 md:mt-7 md:gap-x-1 xl:mt-8 2xl:mt-10"
                >
                    <BiLogoDiscordAlt className="text-2xl md:text-3xl 2xl:text-4xl" />
                    <span>Join Our Discord</span>
                </a>
                <div className="grid grid-cols-1 border-b border-b-white border-opacity-30 text-sm font-anton text-center gap-y-2 py-5 md:grid-cols-3 md:gap-y-0 md:py-7 md:text-base xl:py-10 xl:text-xl 2xl:py-12 2xl:text-2xl">
                    {menuItems.map((item, index) => (
                        <span key={index}>
                            {item.isOutsideLink ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.title}
                                </a>
                            ) : (
                                <Link to={item.link}>{item.title}</Link>
                            )}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col py-2 md:flex-row md:justify-between md:items-center">
                    <span className="text-xs">All rights reserved. Command Hive</span>
                    <div className="social-icons flex items-center text-primary text-xl gap-x-2 mt-2 md:text-2xl md:mt-0 2xl:text-3xl">
                        {socialHandles.map((handle, index) => (
                            <a
                                key={index}
                                target="_blank"
                                href={handle.link}
                            >
                                {handle.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
