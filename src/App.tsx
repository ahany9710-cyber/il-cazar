import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountdownBar from './components/CountdownBar';
import Landing from './pages/Landing';
import { LazyOnView } from './components/LazyOnView';

const Footer = lazy(() => import('./components/Footer'));
const FloatingActionBar = lazy(() => import('./components/FloatingActionBar'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <div className="sticky top-0 z-50">
                <CountdownBar />
              </div>
              <Landing />
              <LazyOnView minHeight={200} rootMargin="0px">
                <Suspense fallback={null}>
                  <Footer />
                  <FloatingActionBar />
                </Suspense>
              </LazyOnView>
            </div>
          }
        />
        <Route
          path="/thank-you"
          element={
            <Suspense fallback={null}>
              <ThankYou />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={null}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={null}>
              <AboutUs />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
