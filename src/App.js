import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';

// --- 1. IMPORT YOUR NEW COMPONENT ---
import ScrollToTop from './components/ScrollToTop';

// All other component imports remain the same
import HomePage from './components/HomePage';
import CourseDetail from './components/CourseDetail';
import CoursesPage from './components/CoursesPage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import CertificationsPage from './components/CertificationsPage';
import AdminAuth from './components/AdminAuth';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer';

// Styles
import './App.css';

// The AppLogic component does NOT need any changes
function AppLogic() {
    // ... all of your existing code for AppLogic remains exactly the same ...
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAdminAuthenticated') === 'true');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(sessionStorage.getItem('isAdminAuthenticated') === 'true');
        };
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogin = (password) => {
        if (password === 'coaching') {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            setIsAuthenticated(true);
            navigate('/admin');
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        setIsAuthenticated(false);
        navigate('/');
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="app-header">
                <Link to="/" className="logo" onClick={closeMenu}>ProCoach</Link>
                
                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="nav-item" onClick={closeMenu} end>Home</NavLink>
                    <NavLink to="/courses" className="nav-item" onClick={closeMenu}>Courses</NavLink>
                    <NavLink to="/certifications" className="nav-item" onClick={closeMenu}>Certifications</NavLink>
                    <NavLink to="/services" className="nav-item" onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/resume" className="nav-item" onClick={closeMenu}>Resume</NavLink>
                    <NavLink to="/about" className="nav-item" onClick={closeMenu}>About Us</NavLink>
                    
                    {isAuthenticated && (
                        <NavLink to="/admin" className="nav-item" onClick={closeMenu}>Admin Panel</NavLink>
                    )}
                </nav>
            </header>
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/course/:id" element={<CourseDetail />} />
                    <Route path="/certifications" element={<CertificationsPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/admin" element={ isAuthenticated ? <AdminPage onLogout={handleLogout} /> : <AdminAuth onLogin={handleLogin} /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

// The main App component is where you'll make the change
function App() {
    return (
        <Router>
            {/* --- 2. PLACE THE COMPONENT HERE --- */}
            <ScrollToTop />
            <AppLogic />
        </Router>
    );
}

export default App;