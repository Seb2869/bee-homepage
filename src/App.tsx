import React from 'react';
import { FAQs } from './components/FAQs';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { HowCommandHiveWorks } from './components/HowCommandHiveWorks';

const App: React.FC = () => {
    return (
        <main className="w-screen min-h-screen">
            <HowCommandHiveWorks />
            <Features />
            <FAQs />
            <Footer />
        </main>
    );
};

export default App;
