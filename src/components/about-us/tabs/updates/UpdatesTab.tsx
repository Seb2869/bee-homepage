import React from 'react';
import { Update, UpdateItemType } from '../../../../models/common';
import { UpdateWrapper } from './UpdateWrapper';
import { UpdateItems } from './items/UpdateItems';

import Downloads from '../../../../assets/about-us/updates/downloads.svg';
import TrendingUp from '../../../../assets/about-us/updates/trending_up.svg';
import X from '../../../../assets/about-us/updates/x.svg';

export const UpdatesTab: React.FC = () => {
    const updatesData: Update[] = [
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
                        }
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
                                    url: 'https://pypi.org/project/bee-agent/'
                                }
                            ]
                        },
                        {
                            id: 2,
                            text: 'Created a comprehensive video about CommandHive for grant submissions, showcasing our AI agent orchestration platform.',
                            links: [
                                {
                                    text: 'video about CommandHive',
                                    url: 'https://www.youtube.com/watch?v=2Ne0waOZFmc'
                                }
                            ]
                        },
                        {
                            id: 3,
                            text: 'Successfully migrated @kleo_network to @commandhive on Twitter, bringing our 100k+ followers to the new brand identity.',
                            links: [
                                {
                                    text: '@commandhive',
                                    url: 'https://x.com/commandhive'
                                }
                            ]
                        },
                        {
                            id: 4,
                            text: 'Got selected for Eigen Hacker House happening in Berlin during Berlin Blockchain Week (June 13-20th), connecting with the Ethereum ecosystem.'
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
                                    url: 'https://commandhive.xyz'
                                }
                            ]
                        },
                        {
                            id: 7,
                            text: 'Open sourced our backend repository and pip package, contributing to the AI agent development community.',
                            links: [
                                {
                                    text: 'backend repository',
                                    url: 'https://github.com/CommandHive'
                                }
                            ]
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

    // const updatesData: Update[] = [
    //     {
    //         date: 'November 4th, 2024',
    //         items: [
    //             {
    //                 type: UpdateItemType.LIST,
    //                 title: 'SDK End Goals:',
    //                 icon: TargetHit,
    //                 points: [
    //                     {
    //                         id: 1,
    //                         text: 'Pooling data to build novel AI models',
    //                     },
    //                     {
    //                         id: 2,
    //                         text: 'Building hyper-personalized user experiences',
    //                     },
    //                     {
    //                         id: 3,
    //                         text: 'Creating use cases for research data sales',
    //                     },
    //                 ],
    //             },
    //             {
    //                 type: UpdateItemType.LIST,
    //                 title: 'Highlights:',
    //                 icon: TrendingUp,
    //                 points: [
    //                     {
    //                         id: 1,
    //                         text: 'Surpassed 10,000+ extension downloads',
    //                     },
    //                     {
    //                         id: 2,
    //                         text: 'Successfully managed community during server issues',
    //                     },
    //                     {
    //                         id: 3,
    //                         text: 'Preparing for Devcon in Bangkok (Nov 6-11)',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         date: 'October 22nd, 2024',
    //         items: [
    //             {
    //                 type: UpdateItemType.CARDS,
    //                 title: 'Highlights:',
    //                 cards: [
    //                     {
    //                         icon: Downloads,
    //                         title: 'Agents Created',
    //                         number: 6400,
    //                         change: 25,
    //                     },
    //                     {
    //                         icon: X,
    //                         title: 'X Followers',
    //                         number: 43000,
    //                         change: 10,
    //                     },
    //                     {
    //                         icon: Treasury,
    //                         title: 'Grant Received',
    //                         number: 24000,
    //                         isCurrency: true,
    //                         change: 25,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         date: 'October 15th, 2024',
    //         items: [
    //             {
    //                 type: UpdateItemType.LIST,
    //                 title: 'Highlights:',
    //                 icon: TrendingUp,
    //                 points: [
    //                     {
    //                         id: 1,
    //                         text: 'Launched Landing Page for CommandHive',
    //                     },
    //                     {
    //                         id: 2,
    //                         text: 'Pitched at Starknet Hacker House',
    //                     },
    //                     {
    //                         id: 3,
    //                         text: 'Created  Twitter Account',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ];

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
