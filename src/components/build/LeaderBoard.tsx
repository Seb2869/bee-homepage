import React from 'react';

import LeaderBoardSkeleton from '../../assets/build/leaderboard/leaderboard-skeleton.png';

export const LeaderBoard: React.FC = () => {
    return (
        <section className="w-full bg-offWhite text-black">
            <div className="section-container md:!flex-row-reverse md:!items-center">
                <div className="section-image-wrapper md:!justify-end">
                    <img
                        src={LeaderBoardSkeleton}
                        alt="LeaderBoard Skeleton"
                        className="w-3/4 md:w-[100%]"
                    />
                </div>
                <div className="section-body-container">
                    <h2 className="section-heading">
                        Rank High On The <br></br>
                        LeaderBoard
                    </h2>
                    <p className="section-body">
                        We release a list of required MCP servers from our partners and collaborators. 
                        The leaderboard resets every month to build a level playing field for developers. We will review payouts
                        for authencity and deepdive on them before making the decision.
                    </p>
                    {/* <a
                        href={LAUNCH_APP_URL}
                        target="_blank"
                        className="btn-primary pointer-events-auto !mt-2 lg:px-5 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                    >
                        View LeaderBoard
                    </a> */}
                </div>
            </div>
        </section>
    );
};
