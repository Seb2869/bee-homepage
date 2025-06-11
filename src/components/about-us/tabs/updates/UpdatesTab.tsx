import React from 'react';
import {
    BEE_AGENT_PIP_PACKAGE_URL,
    COMMAND_HIVE_GITHUB_URL,
    COMMAND_HIVE_VIDEO_URL,
    COMMAND_HIVE_WEBSITE_URL,
    COMMAND_HIVE_X_URL,
} from '../../../../constants/common.constants';
import { Update, UpdateItemType } from '../../../../models/common';
import { UpdateWrapper } from './UpdateWrapper';
import { UpdateItems } from './items/UpdateItems';

import Downloads from '../../../../assets/about-us/updates/downloads.svg';
import TrendingUp from '../../../../assets/about-us/updates/trending_up.svg';
import X from '../../../../assets/about-us/updates/x.svg';

export const UpdatesTab: React.FC = () => {
    const updatesData: Update[] = [
        {
            date: 'June 11th, 2025',
            items: [
                {
                    type: UpdateItemType.LIST,
                    title: 'Highlights for this week!',
                    icon: TrendingUp,
                    points: [
                        {
                            id: 1,
                            text: 'Completed our docker container and hosted image on dockerhub! Each user will have their own docker container which will run agents, store memory, knowledge base and logs.',
                            links: [
                                {
                                    text: 'docker container',
                                    url: 'https://github.com/CommandHive/bee-container',
                                },
                            ],
                        },
                        {
                            id: 2,
                            text: 'The endpoints of the docker container allow for creation, starting, stopping and deletion of an AI agent.',
                        },
                        {
                            id: 3,
                            text: 'We created an image for our docker container which can be used on Phala TEE, with total downloads of 60+.',
                            links: [
                                {
                                    text: 'Phala TEE',
                                    url: 'https://hub.docker.com/r/vaibhavgeek/user-agent-api',
                                },
                            ],
                        },
                        {
                            id: 4,
                            text: 'Created a page for new ecosystem builders to contribute to CommandHive by MCP Servers - where they are funded by Quadratic Funding.',
                            links: [
                                {
                                    text: 'ecosystem builders to contribute',
                                    url: 'https://commandhive.xyz/build',
                                },
                            ],
                        },
                        {
                            id: 5,
                            text: 'We improved the documentation for our pip package and added a video for other people to build and use it. (https://pypi.org/project/bee-agent/), it has now 50 total downloads.',
                            links: [
                                {
                                    text: 'documentation for our pip package',
                                    url: 'https://pypi.org/project/bee-agent/',
                                },
                            ],
                        },
                        {
                            id: 6,
                            text: 'Our application with containerized dockerization will launch on June 18th! So we are gearing up for the launch.',
                        },
                        {
                            id: 7,
                            text: 'We will be attending Berlin Blockchain Week and then EthCC at Cannes, come say hi!',
                        },
                    ],
                },
            ],
        },
        {
            date: 'June 1st, 2025',
            items: [
                {
                    type: UpdateItemType.CARDS,
                    title: 'Key Metrics:',
                    cards: [
                        {
                            icon: Downloads,
                            title: 'Pip Package Downloads',
                            number: 50,
                            change: 100,
                        },
                        {
                            icon: X,
                            title: 'Twitter Followers',
                            number: 100000,
                            change: 2000,
                        },
                    ],
                },
                {
                    type: UpdateItemType.LIST,
                    title: 'Highlights of this week!',
                    icon: TrendingUp,
                    points: [
                        {
                            id: 1,
                            text: 'We launched our bee-agent pip package (connecting MCP servers) with integrations of Redis, Kafka and AWS MSK, version v0.0.3.',
                            links: [
                                {
                                    text: 'bee-agent pip package',
                                    url: BEE_AGENT_PIP_PACKAGE_URL,
                                },
                            ],
                        },
                        {
                            id: 2,
                            text: 'Created a comprehensive video about CommandHive for grant submissions, showcasing our AI agent orchestration platform.',
                            links: [
                                {
                                    text: 'video about CommandHive',
                                    url: COMMAND_HIVE_VIDEO_URL,
                                },
                            ],
                        },
                        {
                            id: 3,
                            text: 'Successfully migrated @kleo_network to @commandhive on Twitter, bringing our 100k+ followers to the new brand identity.',
                            links: [
                                {
                                    text: '@commandhive',
                                    url: COMMAND_HIVE_X_URL,
                                },
                            ],
                        },
                        {
                            id: 4,
                            text: 'Got selected for Eigen Hacker House happening in Berlin during Berlin Blockchain Week (June 13-20th), connecting with the Ethereum ecosystem.',
                        },
                        {
                            id: 5,
                            text: 'Successfully tested MCP servers including Twitter integration, Brave Search, Deep Thinking AI, and data fetch capabilities for enhanced agent functionality.',
                        },
                        {
                            id: 6,
                            text: 'Made our website SEO optimized and AI agent-friendly, improving discoverability and integration capabilities.',
                            links: [
                                {
                                    text: 'website',
                                    url: COMMAND_HIVE_WEBSITE_URL,
                                },
                            ],
                        },
                        {
                            id: 7,
                            text: 'Open sourced our backend repository and pip package, contributing to the AI agent development community.',
                            links: [
                                {
                                    text: 'backend repository',
                                    url: COMMAND_HIVE_GITHUB_URL,
                                },
                            ],
                        },
                        {
                            id: 8,
                            text: 'Designed a unique hexagonal visiting card that reflects our innovative approach to AI agent networking and brand identity.',
                        },
                    ],
                },
            ],
        },
        {
            date: 'May  10th, 2025',
            items: [
                {
                    type: UpdateItemType.LIST,
                    title: 'Highlights:',
                    icon: TrendingUp,
                    points: [
                        {
                            id: 1,
                            text: 'Launched Landing Page for CommandHive',
                        },
                        {
                            id: 2,
                            text: 'Pitched at Starknet Hacker House',
                        },
                        {
                            id: 3,
                            text: 'Created  Twitter Account',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="app-container">
            <div className="w-full max-w-screen-md mx-auto xl:max-w-screen-lg">
                <div className="border-l-2 border-l-primary flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-8 xl:gap-y-10 xl:border-l-4">
                    {updatesData.map((update, index) => (
                        <UpdateWrapper
                            key={index}
                            index={index}
                            update={update}
                            lastIndex={updatesData.length - 1}
                        />
                    ))}
                </div>
                <div className="w-full pl-5 md:pl-10 xl:pl-16">
                    <UpdateItems items={updatesData[updatesData.length - 1].items} />
                </div>
            </div>
        </div>
    );
};
