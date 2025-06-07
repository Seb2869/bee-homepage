import React from 'react';

type NumberInputProps = {
    label: string;
    id: string;
    value: number;
    onChange: (value: number) => void;
};

export const NumberInput: React.FC<NumberInputProps> = ({ label, id, value, onChange }) => {
    return (
        <div className="text-white flex flex-col gap-y-1 lg:gap-y-2">
            <label
                htmlFor={id}
                className="section-body !font-medium uppercase"
            >
                {label}
            </label>
            <input
                type="number"
                id={id}
                value={value}
                onChange={(event) => onChange(parseInt(event.target.value))}
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded px-4 py-2 focus:border-primary focus:border-2 focus:outline-none lg:px-5 lg:py-3 xl:rounded-md 2xl:rounded-lg"
            />
        </div>
    );
};
