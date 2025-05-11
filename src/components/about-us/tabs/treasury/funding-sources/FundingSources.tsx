import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { ZAPPER_ID, ZAPPER_URL } from '../../../../../constants/common.constants';
import { FUNDS } from '../../../../../constants/funding.constants';
import { FundingSourceCard } from './FundingSourceCard';

export const FundingSources: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-y-4 lg:gap-x-5 lg:flex-row 2xl:gap-x-6">
            <div className="w-full outlined-card flex flex-col gap-y-2 md:gap-y-3 lg:flex-1">
                <h3 className="section-subheading mb-2">Funding Sources</h3>
                {FUNDS.sources.map((fundingSource, index) => (
                    <FundingSourceCard
                        key={index}
                        fundingSource={fundingSource}
                    />
                ))}
            </div>
            <div className="w-full outlined-card !border-none flex flex-col !bg-black !text-white lg:w-[35%] xl:w-[30%]">
                <h3 className="section-subheading mb-4 md:mb-6">Treasury Tracking</h3>
                <div className="flex flex-col justify-between bg-white bg-opacity-20 flex-1 rounded p-2 md:p-3 2xl:p-4">
                    <p className="section-body break-all">{ZAPPER_ID}</p>
                    <a
                        href={ZAPPER_URL}
                        target="_blank"
                        className="btn-primary !font-inter !font-medium flex items-center gap-x-1 md:gap-x-[6px] xl:gap-x-2 2xl:gap-x-[10px]"
                    >
                        <span>View on Zapper</span>
                        <BiLinkExternal className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};
