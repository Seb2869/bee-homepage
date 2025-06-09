import React from 'react';
import { Agent } from '../../../models/common';
import { EarningsCalculator } from './EarningsCalculator';
import { EarningsCard } from './EarningsCard';

export const QuadraticFunding: React.FC = () => {
    const [earnings, setEarnings] = React.useState<number>(0);
    const [agents, setAgents] = React.useState<Agent[]>([
        { id: 1, toolCalls: 200 },
        { id: 2, toolCalls: 100 },
        { id: 3, toolCalls: 300 },
    ]);

    const addAgent = (): void => {
        if (agents.length >= 5) return; // Maximum 5 agents
        const randomToolCalls = Math.floor(Math.random() * 201) + 100; // Random number between 100-300
        const newAgent: Agent = {
            id: agents.length + 1,
            toolCalls: randomToolCalls,
        };
        setAgents([...agents, newAgent]);
    };

    const removeAgent = (id: number): void => {
        if (agents.length > 1) {
            setAgents(agents.filter((agent) => agent.id !== id));
        }
    };

    const updateAgentToolCalls = (id: number, toolCalls: number): void => {
        setAgents(agents.map((agent) => (agent.id === id ? { ...agent, toolCalls } : agent)));
    };

    const calculateEarnings = (): void => {
        // Quadratic Funding Algorithm Implementation
        // Formula: (sum of sqrt(individual_contributions))^2 * multiplier

        const multiplier = 0.1; // Dollar multiplier (adjustable)

        const validAgents = agents.filter((agent) => agent.toolCalls > 0);

        if (validAgents.length === 0) {
            setEarnings(0);
            return;
        }

        // Calculate sum of square roots of individual contributions
        const totalSqrtSum = validAgents.reduce((sum, agent) => {
            return sum + Math.sqrt(agent.toolCalls);
        }, 0);

        // Square the sum for quadratic effect
        const quadraticAmount = Math.pow(totalSqrtSum, 2);

        const finalEarnings = quadraticAmount * multiplier;
        setEarnings(Math.round(finalEarnings * 100) / 100); // Round to 2 decimal places
    };

    // Calculate default earnings on page load
    React.useEffect(() => {
        calculateEarnings();
    }, []);

    return (
        <section className="w-full bg-black text-white top-left-sharp-edge-rectangle">
            <div className="app-container">
                <h2 className="section-heading text-center">Quadratic Funding</h2>
                <p className="section-body text-center my-3 md:my-4 xl:my-5 2xl:my-6">
                    The more agents call your MCP server, the more money you earn
                </p>
                <div className="w-full flex flex-col gap-y-10 items-center mt-5 md:mt-8 lg:flex-row lg:justify-between lg:mt-10 lg:items-center">
                    <EarningsCard earnings={earnings} />
                    <EarningsCalculator
                        calculateEarnings={calculateEarnings}
                        addAgent={addAgent}
                        agents={agents}
                        updateAgentToolCalls={updateAgentToolCalls}
                        removeAgent={removeAgent}
                    />
                </div>
            </div>
        </section>
    );
};
