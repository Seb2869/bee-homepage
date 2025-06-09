import React from 'react';
import { BiPlus, BiTrash } from 'react-icons/bi';
import { Agent } from '../../../models/common';
import { NumberInput } from './NumberInput';

type EarningsCalculatorProps = {
    calculateEarnings: () => void;
    addAgent: () => void;
    agents: Agent[];
    updateAgentToolCalls: (id: number, toolCalls: number) => void;
    removeAgent: (id: number) => void;
};

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
    calculateEarnings,
    addAgent,
    agents,
    updateAgentToolCalls,
    removeAgent,
}) => {
    const handleEarningsCalculation = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        calculateEarnings();
    };

    return (
        <div className="w-full flex flex-col gap-y-4 md:w-3/5 lg:w-1/2 lg:gap-y-6">
            <h2 className="section-subheading !font-inter uppercase !font-bold">Calculate Your Earning</h2>
            <div className="flex justify-between items-center">
                <p className="section-body !font-semibold">Agents</p>
                <button
                    type="button"
                    className="font-bold text-xl p-1 rounded bg-primary text-black border border-primary cursor-pointer disabled:opacity-50 disabled:cursor-default md:text-2xl md:p-2 xl:p-[10px]"
                    onClick={addAgent}
                    disabled={agents.length >= 5}
                    aria-label="Add agent"
                    title="Add agent"
                >
                    <BiPlus />
                </button>
            </div>
            <form
                onSubmit={handleEarningsCalculation}
                className="flex flex-col gap-y-4 lg:gap-y-6"
            >
                <div className="flex flex-col gap-y-4 lg:gap-y-6">
                    {agents.map((agent, index) => (
                        <div
                            key={agent.id}
                            className="flex items-center"
                        >
                            <NumberInput
                                label={`Agent #${index + 1}`}
                                id={`agent-${index + 1}`}
                                value={agent.toolCalls}
                                onChange={(value: number) => {
                                    updateAgentToolCalls(agent.id, value);
                                }}
                                placeholder="Tool calls"
                            />

                            <button
                                onClick={() => removeAgent(agent.id)}
                                title="Remove Agent"
                                aria-label="Remove Agent"
                                disabled={agents.length <= 1}
                                className="text-lg ml-3 hover:text-primary disabled:opacity-50 disabled:hover:text-white disabled:cursor-not-allowed md:ml-4 lg:text-xl 2xl:text-2xl"
                            >
                                <BiTrash />
                            </button>
                        </div>
                    ))}
                </div>
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
