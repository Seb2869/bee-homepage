import React from 'react';
import { BiGlobe, BiLogoLinkedin } from 'react-icons/bi';
import { SocialPlatform, TeamMember } from '../../../../models/common';

export const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const getSocialIcon = (platform: SocialPlatform): React.ReactNode => {
        switch (platform) {
            case SocialPlatform.LINKEDIN:
                return <BiLogoLinkedin />;
            case SocialPlatform.PORTFOLIO:
                return <BiGlobe />;
            default:
                return <BiGlobe />;
        }
    };

    return (
        <div className="relative">
            <div className="w-full z-[6]">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-1/4 mx-auto md:w-[30%]"
                />
            </div>

            <div className="outlined-card -mt-12 !pt-14 z-[5] text-center flex flex-col gap-y-3 md:-mt-14 md:!pt-16 xl:-mt-[72px] xl:!pt-[88px] xl:gap-y-4">
                <p className="section-body !text-primary !font-bold">{member.position.toUpperCase()}</p>
                <h3 className="font-anton text-lg md:text-xl xl:text-2xl 2xl:text-3xl">{member.name}</h3>
                <p className="section-body">{member.description}</p>
                <div className="flex justify-center gap-x-[10px]">
                    {member.socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="border border-primary text-primary p-1 text-xl bg-white rounded transition-all duration-300 ease-linear xl:hover:text-white xl:hover:bg-primary xl:rounded-md xl:text-2xl xl:p-2 2xl:rounded-lg"
                        >
                            {getSocialIcon(link.platform)}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
