import React from 'react';
import { UserReview } from '../../../models/common';

export const UserReviewCard: React.FC<{ review: UserReview }> = ({ review }) => {
    return (
        <div className="outlined-card h-fit flex flex-col gap-y-4 lg:gap-y-5 2xl:gap-y-6">
            <div className="flex reviews-center gap-x-3 xl:gap-x-4">
                <img
                    src={review.profilePicture}
                    alt={review.name}
                    className="w-10 xl:w-12"
                />
                <div className="flex flex-col gap-y-[2px]">
                    <h5 className="font-anton text-sm xl:text-lg 2xl:text-xl">{review.name}</h5>
                    <span className="font-inter text-xs xl:text-sm">{review.location}</span>
                </div>
            </div>
            <p className="section-body font-medium">"{review.review}"</p>
            <span className="font-inter text-xs xl:text-sm">{review.date}</span>
        </div>
    );
};
