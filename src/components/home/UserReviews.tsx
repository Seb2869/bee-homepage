import React from 'react';

import User1 from '../../assets/user-reviews/user1.svg';
import User2 from '../../assets/user-reviews/user2.svg';
import User3 from '../../assets/user-reviews/user3.svg';

type UserReview = {
    name: string;
    location: string;
    profilePicture: string;
    review: string;
    date: string;
};

export const UserReviews: React.FC = () => {
    const reviews: UserReview[] = [
        {
            name: 'Omar Calzoni',
            location: 'Texas, USA',
            profilePicture: User1,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
            date: '21 December 2024',
        },
        {
            name: 'Terry Gouse',
            location: 'Texas, USA',
            profilePicture: User2,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            date: '21 December 2024',
        },
        {
            name: 'Lydia Dokidis',
            location: 'Texas, USA',
            profilePicture: User3,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            date: '21 December 2024',
        },
    ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-7 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:py-14 2xl:py-16">
                <h2 className="font-anton text-xl md:text-[22px] lg:text-2xl xl:text-4xl 2xl:text-5xl">
                    Hear From The Users
                    <span className="text-primary">.</span>
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-2 md:mt-6 md:gap-y-0 md:gap-x-2 md:grid-cols-3 lg:gap-x-4 xl:mt-10 xl:gap-x-6 2xl:mt-14 2xl:gap-x-7">
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white h-fit border border-[#000000] border-opacity-15 rounded p-4 flex flex-col gap-y-4 lg:p-5 lg:gap-y-5 xl:rounded-md 2xl:rounded-lg 2xl:p-6 2xl:gap-y-6"
                        >
                            <div className="flex items-center gap-x-3">
                                <img
                                    src={item.profilePicture}
                                    alt={item.name}
                                    className="w-10"
                                />
                                <div className="flex flex-col gap-y-[2px]">
                                    <h5 className="font-anton text-sm xl:text-base 2xl:text-lg">{item.name}</h5>
                                    <span className="font-inter text-xs xl:text-sm">{item.location}</span>
                                </div>
                            </div>
                            <p className="font-inter font-medium text-xs leading-normal md:text-sm md:leading-relaxed xl:text-base 2xl:text-lg">
                                "{item.review}"
                            </p>
                            <span className="font-inter text-xs xl:text-sm">{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
