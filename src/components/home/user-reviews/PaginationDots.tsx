import React from 'react';

type PaginationDotsProps = {
    totalPages: number;
    currentPage: number;
    paginate: (newPageNumber: number) => void;
};

export const PaginationDots: React.FC<PaginationDotsProps> = ({ totalPages, currentPage, paginate }) => {
    return (
        <div className="w-full flex justify-center items-center gap-x-[6px] mt-2 md:mt-3 lg:gap-x-2 xl:mt-4 xl:gap-x-[10px]">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((_, i) => {
                if (i + 1 === currentPage) {
                    return (
                        <div
                            key={i}
                            className="rounded-full border-2 border-primary p-[2px]"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary md:w-3 md:h-3 xl:w-[14px] xl:h-[14px]"></div>
                        </div>
                    );
                }

                return (
                    <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#EBEBEB] cursor-pointer md:w-3 md:h-3 xl:w-[14px] xl:h-[14px]"
                        onClick={() => paginate(i + 1)}
                    ></div>
                );
            })}
        </div>
    );
};
