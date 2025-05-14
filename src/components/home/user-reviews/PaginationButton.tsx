import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface PaginationButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: 'prev' | 'next';
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({ onClick, disabled, direction }) => {
    const baseClasses = 'font-bold text-xl p-1 rounded md:text-2xl md:p-2 xl:p-[10px]',
        activeClasses = 'bg-primary text-black border border-primary cursor-pointer',
        disabledClasses = 'border border-gray-500 text-gray-500 cursor-default';

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${baseClasses} ${disabled ? disabledClasses : activeClasses}`}
        >
            <BiArrowBack className={direction === 'next' ? 'rotate-180' : ''} />
        </button>
    );
};
