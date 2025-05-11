import React from 'react';

import Partner1 from '../../assets/home/partners/partner1.svg';
import Partner2 from '../../assets/home/partners/partner2.svg';
import Partner3 from '../../assets/home/partners/partner3.svg';
import Partner4 from '../../assets/home/partners/partner4.svg';
import Partner5 from '../../assets/home/partners/partner5.svg';

type Partner = {
    id: number;
    logo: string;
};

export const Partners: React.FC = () => {
    const partners: Partner[] = [
        {
            id: 1,
            logo: Partner1,
        },
        {
            id: 2,
            logo: Partner2,
        },
        {
            id: 3,
            logo: Partner3,
        },
        {
            id: 4,
            logo: Partner4,
        },
        {
            id: 5,
            logo: Partner5,
        },
    ];

    return (
        <section className="bg-primary bottom-left-sharp-edge-rectangle text-black">
            <div className="app-container">
                <h4 className="text-center font-anton md:text-lg lg:text-xl xl:text-2xl">OUR PARTNERS</h4>
                <div className="grid grid-cols-2 mt-2 gap-y-2 md:gap-y-0 md:gap-x-3 md:grid-cols-5 md:mt-3 2xl:mt-4 2xl:gap-x-4">
                    {partners.map((partner, index) => (
                        <div
                            className={`w-full ${index === partners.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
                            key={index}
                        >
                            <img
                                src={partner.logo}
                                className={`${index === partners.length - 1 ? 'w-2/5' : 'w-3/4'} mx-auto md:mx-0 md:w-full`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
