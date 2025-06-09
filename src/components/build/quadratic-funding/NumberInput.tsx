import React from 'react';

type NumberInputProps = {
    label: string;
    id: string;
    value: number;
    onChange: (value: number) => void;
    placeholder: string;
};

export const NumberInput: React.FC<NumberInputProps> = ({ label, id, value, onChange, placeholder }) => {
    return (
        <div className="text-white flex-1 flex items-center gap-x-3 md:gap-x-4 xl:gap-x-6">
            <label
                htmlFor={id}
                className="section-body !text-offWhite"
            >
                {label}
            </label>
            <input
                type="number"
                id={id}
                value={value}
                onChange={(event) => onChange(parseInt(event.target.value))}
                className="flex-1 w-full text-sm bg-white bg-opacity-5 border border-white border-opacity-20 rounded p-2 focus:border-primary focus:border-2 focus:outline-none md:text-base md:px-3 lg:px-4 lg:py-3 xl:rounded-md xl:text-lg 2xl:rounded-lg 2xl:text-xl"
                placeholder={placeholder}
            />
        </div>
    );
};
