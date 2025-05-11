import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AboutTab } from './about/AboutTab';
import { RoadmapTab } from './roadmap/RoadmapTab';
import { TeamTab } from './team/TeamTab';
import { TreasuryTab } from './treasury/TreasuryTab';
import { UpdatesTab } from './updates/UpdatesTab';

type AboutUsTabItem = {
    id: string;
    name: string;
    component: React.ReactNode;
};

export const AboutUsTabs: React.FC = () => {
    const tabs: AboutUsTabItem[] = [
            { id: 'updatesTab', name: 'Updates', component: <UpdatesTab /> },
            { id: 'aboutTab', name: 'About', component: <AboutTab /> },
            { id: 'teamTab', name: 'Team', component: <TeamTab /> },
            { id: 'treasuryTab', name: 'Treasury', component: <TreasuryTab /> },
            { id: 'roadmapTab', name: 'Roadmap', component: <RoadmapTab /> },
        ],
        [activeTab, setActiveTab] = useState('aboutTab'),
        [isTransitioning, setIsTransitioning] = useState(false),
        activeContent = tabs.find((tab) => tab.id === activeTab)?.component;

    const handleTabChange = (tabId: string) => {
        if (activeTab !== tabId) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(tabId);
                setIsTransitioning(false);
            }, 300);
        }
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="app-container !py-0 bg-offWhite">
                <div className="w-full border-b border-b-[#D5D9EB] py-2 md:py-4 xl:py-5">
                    <div className="grid grid-cols-5 bg-white rounded overflow-hidden text-black font-semibold border border-[#000000] border-opacity-15">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`flex justify-center items-center text-[10px] py-1 transition-colors duration-300 ease-linear md:text-sm md:py-2 lg:text-lg xl:text-xl xl:py-3 2xl:text-[22px] ${
                                    activeTab === tab.id
                                        ? 'cursor-default bg-black text-white rounded'
                                        : 'cursor-pointer hover:bg-gray-100'
                                }`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                <span>{tab.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.section
                className="w-full"
                animate={{
                    opacity: isTransitioning ? 0 : 1,
                    x: isTransitioning ? 40 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {activeContent}
            </motion.section>
        </div>
    );
};
