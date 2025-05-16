import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';

const RootLayout: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            document.documentElement.scrollTo(0, 0);
        }, 100);
    }, [pathname]);

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
