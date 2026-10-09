import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CurriculumPage from './pages/CurriculumPage';
import GovernmentPage from './pages/GovernmentPage';
import ContactPage from './pages/ContactPage';
import Programmers from './pages/Programmers';
import Ai_for_student from './pages/Ai_for_student';



// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-orange-500 selection:text-white">
        {/* Global Sticky Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ai-curriculum" element={<CurriculumPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/programmes" element={<Programmers />} />
            <Route path="/ai_for_student" element={<Ai_for_student />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global 4-Column Footer with State-based Newsletter Form */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
