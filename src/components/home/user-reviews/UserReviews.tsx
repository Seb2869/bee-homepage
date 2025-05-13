import React from 'react';
import { UserReview } from '../../../models/common';
import { UserReviewCard } from './UserReviewCard';

import User1 from '../../../assets/home/user-reviews/user1.svg';
import User2 from '../../../assets/home/user-reviews/user2.svg';
import User3 from '../../../assets/home/user-reviews/user3.svg';

export const UserReviews: React.FC = () => {
    const reviews: UserReview[] = [
        {
            name: 'Anuhya Challagundla',
            location: 'Ecosystem, Aptos',
            profilePicture: User1,
            review: 'Vaibhav and team showed remarkable progress at Stellar Draper University Residency,  excited to see what he comes up with. They are doing amazing work with CommandHive!',
            date: '21 December 2024',
        },
        {
            name: 'Nirav Murthy',
            location: 'Camp Network',
            profilePicture: User2,
            review: 'Camp Network is looking forward to launch CommandHive Agents to Camp Network powered data IP! User owned data is a mission to be accomplished together',
            date: '21 December 2024',
        },
        {
            name: 'Rehan Nek',
            location: 'Starknet India',
            profilePicture: User3,
            review: 'It was an absolute pleasure to works with CommandHive Team. They have great work ethic and are willing to run through walls to ensure the outcomes are delivered.',
            date: '21 December 2024',
        },
    ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="app-container">
                <h2 className="section-heading">
                    Hear From The Users
                    <span className="text-primary">.</span>
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-2 md:mt-6 md:gap-y-0 md:gap-x-2 md:grid-cols-3 lg:gap-x-4 xl:mt-10 xl:gap-x-6 2xl:mt-14 2xl:gap-x-7">
                    {reviews.map((review, index) => (
                        <UserReviewCard
                            review={review}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
