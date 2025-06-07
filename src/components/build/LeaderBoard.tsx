import React from 'react';
import { LAUNCH_APP_URL } from '../../constants/common.constants';

import LeaderBoardSkeleton from '../../assets/build/leaderboard/leaderboard-skeleton.webp';

export const LeaderBoard: React.FC = () => {
    return (
        <section className="w-full bg-offWhite text-black">
            <div className="section-container md:!flex-row-reverse">
                <div className="section-image-wrapper md:!justify-end">
                    <img
                        src={LeaderBoardSkeleton}
                        alt="LeaderBoard Skeleton"
                        className="w-3/4 md:w-[80%]"
                    />
                </div>
                <div className="section-body-container">
                    <h2 className="section-heading">
                        Rank High On The <br></br>
                        LeaderBoard To Earn More
                    </h2>
                    <p className="section-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <a
                        href={LAUNCH_APP_URL}
                        target="_blank"
                        className="btn-primary pointer-events-auto lg:px-5 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                    >
                        View LeaderBoard
                    </a>
                </div>
            </div>
        </section>
    );
};
