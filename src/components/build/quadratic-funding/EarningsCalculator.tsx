import React from 'react';
import { NumberInput } from './NumberInput';

type EarningsCalculatorProps = {
    numberOfAgents: number;
    numberOfCalls: number;
    onNumberOfAgentsChange: (value: number) => void;
    onNumberOfCallsChange: (value: number) => void;
    calculateEarnings: (numberOfAgents: number, numberOfCalls: number) => void;
};

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
    numberOfAgents,
    numberOfCalls,
    onNumberOfAgentsChange,
    onNumberOfCallsChange,
    calculateEarnings,
}) => {
    const handleEarningsCalculation = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        calculateEarnings(numberOfAgents, numberOfCalls);
    };

    return (
        <div className="w-full flex flex-col gap-y-4 md:w-3/5 lg:w-1/2 lg:gap-y-6">
            <h2 className="section-subheading !font-inter uppercase !font-bold">Calculate Your Earning</h2>
            <form
                onSubmit={handleEarningsCalculation}
                className="flex flex-col gap-y-4 lg:gap-y-6"
            >
                <NumberInput
                    label="Number of Agents using your MCP server"
                    id="number-of-agents"
                    value={numberOfAgents}
                    onChange={onNumberOfAgentsChange}
                />
                <NumberInput
                    label="Number of tool calls made to your MCP server"
                    id="number-of-calls"
                    value={numberOfCalls}
                    onChange={onNumberOfCallsChange}
                />
                <button
                    type="submit"
                    className="btn-primary pointer-events-auto !mt-2 lg:px-5 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                >
                    Calculate
                </button>
            </form>
        </div>
    );
};
