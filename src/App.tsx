import React from 'react';
import { FAQs } from './components/FAQs';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowCommandHiveWorks } from './components/HowCommandHiveWorks';
import { UserReviews } from './components/UserReviews';

const App: React.FC = () => {
    return (
        <main className="w-screen min-h-screen relative">
            <Header />
            <HeroSection />
            <HowCommandHiveWorks />
            <Features />
            <UserReviews />
            <FAQs />
            <Footer />
        </main>
    );
};

export default App;
