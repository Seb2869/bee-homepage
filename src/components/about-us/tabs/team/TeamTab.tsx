import React from 'react';
import { SocialPlatform, TeamMember } from '../../../../models/common';
import { TeamMemberCard } from './TeamMemberCard';

import Jainam from '../../../../assets/about-us/team/jainam.webp';
import Pratik from '../../../../assets/about-us/team/pratik.webp';
import Prince from '../../../../assets/about-us/team/prince.webp';
import Ruchi from '../../../../assets/about-us/team/ruchi.webp';
import Vaibhav from '../../../../assets/about-us/team/vaibhav.webp';

export const TeamTab: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Vaibhav Maheshwari',
            position: 'Founder',
            image: Vaibhav,
            description:
                "NIT Surat alumnus with a Master's in Mathematics, 4 years of full-stack dev experience, active in web3 space for last 3 years.",
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/vaibhavgeek/',
                },
                {
                    platform: SocialPlatform.PORTFOLIO,
                    url: 'https://vaibhavgeek.blogspot.com/',
                },
            ],
        },
        {
            name: 'Ujjwal Kumar',
            position: 'Chief Technology Officer',
            image: Vaibhav,
            description:
                'NIT Surat alumnus with a degree in Computer Science. 4 years of full-stack web3 development experience, and active in web3 space for last 3 years.',
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/ujjwal0501/',
                },
            ],
        },
        {
            name: 'Pratik Ostwal',
            position: 'Growth Marketing',
            image: Pratik,
            description:
                '5 years of experience in web2 marketing. Lead growth at GigIndia, Axis Bank (Freecharge) and Trianly. Full time on Kleo for last 3 months.',
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/pratikostwal/',
                },
                {
                    platform: SocialPlatform.PORTFOLIO,
                    url: 'https://pratikostwal.wixsite.com/productsuccess',
                },
            ],
        },
        {
            name: 'Ruchi Tripathi',
            position: 'UX Designer',
            image: Ruchi,
            description:
                'Product Manager and competency in UX and UI interfaces. 2+ years of Design Experience working with startups. Part Time on Kleo for last 2 months.',
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/ruchi-tripathi-525820158/',
                },
                {
                    platform: SocialPlatform.PORTFOLIO,
                    url: 'https://www.behance.net/ruchii',
                },
            ],
        },
        {
            name: 'Prince Dalsaniya',
            position: 'Tech Lead',
            image: Prince,
            description:
                'Ahmedabad University Alumni, 3+ years Web2 full stack Dev Part time on Kleo for last 2 months.',
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/prince-dalsaniya-256b031a1/',
                },
                {
                    platform: SocialPlatform.PORTFOLIO,
                    url: 'https://princedalsaniya.vercel.app/',
                },
            ],
        },
        {
            name: 'Jainam Shah',
            position: 'Frontend Engineer',
            image: Jainam,
            description:
                'Recent Ahmedabad University graduate with 1 year of experience as a full stack developer, passionate about full stack development and UI/UX design. Part time on Kleo for last 2 months.',
            socialLinks: [
                {
                    platform: SocialPlatform.LINKEDIN,
                    url: 'https://www.linkedin.com/in/jainam-shah-61250020b/',
                },
            ],
        },
    ];

    return (
        <div className="app-container grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:gap-x-5 lg:grid-cols-3 2xl:gap-x-6">
            {teamMembers.map((member, index) => (
                <TeamMemberCard
                    key={index}
                    member={member}
                />
            ))}
        </div>
    );
};
