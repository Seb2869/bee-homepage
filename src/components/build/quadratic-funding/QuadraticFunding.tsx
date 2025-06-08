import React from 'react';
import { EarningsCard } from './EarningsCard';

type Agent = {
    id: number;
    toolCalls: number;
};

export const QuadraticFunding: React.FC = () => {
    const [earnings, setEarnings] = React.useState<number>(0);
    const [agents, setAgents] = React.useState<Agent[]>([
        { id: 1, toolCalls: 200 },
        { id: 2, toolCalls: 100 },
        { id: 3, toolCalls: 300 }
    ]);

    const addAgent = (): void => {
        if (agents.length >= 5) return; // Maximum 5 agents
        const randomToolCalls = Math.floor(Math.random() * 201) + 100; // Random number between 100-300
        const newAgent: Agent = {
            id: agents.length + 1,
            toolCalls: randomToolCalls
        };
        setAgents([...agents, newAgent]);
    };

    const removeAgent = (id: number): void => {
        if (agents.length > 1) {
            setAgents(agents.filter(agent => agent.id !== id));
        }
    };

    const updateAgentToolCalls = (id: number, toolCalls: number): void => {
        setAgents(agents.map(agent => 
            agent.id === id ? { ...agent, toolCalls } : agent
        ));
    };

    const calculateEarnings = (): void => {
        // Quadratic Funding Algorithm Implementation
        // Formula: (sum of sqrt(individual_contributions))^2 * multiplier
        
        const multiplier = 0.1; // Dollar multiplier (adjustable)
        
        const validAgents = agents.filter(agent => agent.toolCalls > 0);
        
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
                    <div className="w-full flex flex-col gap-y-4 md:w-3/5 lg:w-1/2 lg:gap-y-6">
                        <h2 className="section-subheading !font-inter uppercase !font-bold">Calculate Your Earning</h2>
                        <div className="flex flex-col gap-y-4 lg:gap-y-6">
                            <div className="flex flex-col gap-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-300">Agents</span>
                                    <button
                                        onClick={addAgent}
                                        disabled={agents.length >= 5}
                                        className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                                        aria-label="Add agent"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                                {agents.map((agent) => (
                                    <div key={agent.id} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                                        <span className="text-sm font-medium text-white min-w-[80px]">
                                            Agent #{agent.id}
                                        </span>
                                        <input
                                            type="number"
                                            min="0"
                                            value={agent.toolCalls}
                                            onChange={(e) => updateAgentToolCalls(agent.id, parseInt(e.target.value) || 0)}
                                            className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Tool calls"
                                        />
                                        {agents.length > 1 && (
                                            <button
                                                onClick={() => removeAgent(agent.id)}
                                                className="flex items-center justify-center w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                                                aria-label="Delete agent"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={calculateEarnings}
                                className="btn-primary pointer-events-auto !mt-2 lg:px-5 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                            >
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
