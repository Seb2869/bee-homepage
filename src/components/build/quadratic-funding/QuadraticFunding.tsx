import React from 'react';
import { EarningsCalculator } from './EarningsCalculator';
import { EarningsCard } from './EarningsCard';

export const QuadraticFunding: React.FC = () => {
    const [earnings, setEarnings] = React.useState<number>(0),
        [numberOfAgents, setNumberOfAgents] = React.useState<number>(0),
        [numberOfCalls, setNumberOfCalls] = React.useState<number>(0);

    const calculateEarnings = (agents: number, calls: number): void => {
        // Quadratic Funding Algorithm Implementation
        // agents = number of donors
        // calls = contribution amount per donor
        // Formula: (sqrt(contribution) * sqrt(donors))^2 * multiplier
        
        const multiplier = 0.1; // Dollar multiplier (adjustable)
        
        if (agents <= 0 || calls <= 0) {
            setEarnings(0);
            return;
        }
        
        // Standard quadratic funding: sum of sqrt(individual_contributions)^2
        // Since we have uniform contribution (calls per agent), we calculate:
        // sqrt(calls) * agents (sum of sqrt for each donor)
        // Then square it for quadratic effect
        const sqrtContribution = Math.sqrt(calls);
        const totalSqrtSum = sqrtContribution * agents;
        const quadraticAmount = Math.pow(totalSqrtSum, 2);
        
        const finalEarnings = quadraticAmount * multiplier;
        setEarnings(Math.round(finalEarnings * 100) / 100); // Round to 2 decimal places
    };

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
                        numberOfAgents={numberOfAgents}
                        numberOfCalls={numberOfCalls}
                        onNumberOfAgentsChange={setNumberOfAgents}
                        onNumberOfCallsChange={setNumberOfCalls}
                        calculateEarnings={calculateEarnings}
                    />
                </div>
            </div>
        </section>
    );
};
