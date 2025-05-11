import React from 'react';
import { UserReview } from '../../../models/common';
import { UserReviewCard } from './UserReviewCard';

import User1 from '../../../assets/home/user-reviews/user1.svg';
import User2 from '../../../assets/home/user-reviews/user2.svg';
import User3 from '../../../assets/home/user-reviews/user3.svg';

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
