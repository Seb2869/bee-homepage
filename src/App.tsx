import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/Loading';
import { Pages } from './constants/common.constants';
import RootLayout from './layouts/RootLayout';

const Home = lazy(() => import('./pages/Home')),
    AboutUs = lazy(() => import('./pages/AboutUs'));

const App: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route
                    path={Pages.ROOT}
                    element={<RootLayout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path={Pages.ABOUT_US}
                        element={<AboutUs />}
                    />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
