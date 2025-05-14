import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';

const RootLayout: React.FC = () => {
    return (
        <div className="w-full min-h-screen relative">
            <Header />
            <main className="w-full min-h-full relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
