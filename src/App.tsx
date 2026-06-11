import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountdownBar from './components/CountdownBar';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import Landing from './pages/Landing';
import ThankYou from './pages/ThankYou';

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
              <Footer />
              <FloatingActionBar />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
