import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { reviewCardVariants } from '../../../constants/variants';
import { UserReview } from '../../../models/common';
import { PaginationButton } from './PaginationButton';
import { UserReviewCard } from './UserReviewCard';

import User1 from '../../../assets/home/user-reviews/user1.svg';
import User2 from '../../../assets/home/user-reviews/user2.png';
import User3 from '../../../assets/home/user-reviews/user3.svg';
import User4 from '../../../assets/home/user-reviews/user4.png';
import User5 from '../../../assets/home/user-reviews/user5.png';
import { PaginationDots } from './PaginationDots';

export const UserReviews: React.FC = () => {
    const reviews: UserReview[] = [
            {
                name: 'Anuhya Challagundla',
                location: 'Ecosystem, Aptos',
                profilePicture: User1,
                review: 'Vaibhav and team showed remarkable progress at Stellar Draper University Residency, excited to see what he comes up with. They are doing amazing work with CommandHive!',
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
                review: 'It was an absolute pleasure to work with CommandHive Team. They have great work ethic and are willing to run through walls to ensure the outcomes are delivered.',
                date: '21 December 2024',
            },
            {
                name: 'Ravikant Agrawal',
                location: 'Privado ID',
                profilePicture: User4,
                review: 'CommandHive is one of the fastest moving teams in Data Ownership space to enable building AI applications. Their commitment, innovative approach and fire the belly makes them standout as compared to the rest.',
                date: '21 December 2024',
            },
            {
                name: 'Darren Rogan',
                location: 'VANA Network',
                profilePicture: User5,
                review: "CommandHive is one of the top DLPs of VANA's Aurora Cohort. They are the right mix of technical and marketing powerhouse. We look forward to continue to support them.",
                date: '21 December 2024',
            },
        ],
        reviewsPerPage = 3,
        totalPages = Math.ceil(reviews.length / reviewsPerPage),
        [currentPage, setCurrentPage] = useState(1),
        [direction, setDirection] = useState(1),
        currentReviews = reviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

    const paginate = (newPage: number) => {
        if (newPage !== currentPage) {
            setDirection(newPage > currentPage ? 1 : -1);
            setCurrentPage(newPage);
        }
    };

    return (
        <section
            id="reviews"
            className="w-full text-black bg-offWhite"
        >
            <div className="app-container">
                <div className="w-full flex items-center justify-between">
                    <h2 className="section-heading">
                        Hear From The Partners
                        <span className="text-primary">.</span>
                    </h2>
                    <div className="flex items-center gap-x-[6px] lg:gap-x-2 xl:gap-x-3">
                        <PaginationButton
                            disabled={currentPage === 1}
                            onClick={() => paginate(currentPage - 1)}
                            direction="prev"
                        />
                        <PaginationButton
                            disabled={currentPage === totalPages}
                            onClick={() => paginate(currentPage + 1)}
                            direction="next"
                        />
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-1 min-h-[300px] gap-y-2 relative overflow-hidden md:mt-6 md:gap-x-2 md:grid-cols-3 lg:gap-x-4 xl:mt-10 xl:gap-x-6 xl:min-h-[340px] 2xl:mt-14 2xl:gap-x-7">
                    <AnimatePresence
                        mode="wait"
                        initial={false}
                        custom={direction}
                    >
                        {currentReviews.map((review, i) => (
                            <motion.div
                                key={review.name + i}
                                custom={direction}
                                variants={reviewCardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="h-full"
                            >
                                <UserReviewCard review={review} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <PaginationDots
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </section>
    );
};
