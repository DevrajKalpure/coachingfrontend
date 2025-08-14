import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Component Imports
import HomePage from './components/HomePage';
import CourseDetail from './components/CourseDetail';
import ResumePage from './components/ResumePage';
import AdminAuth from './components/AdminAuth';
import AdminPage from './components/AdminPage'; // Make sure you have this component
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import CoursesPage from './components/CoursesPage';
import Footer from './components/Footer';

// Styles
import './App.css';

// A wrapper component to handle navigation logic within the main App component
function AppLogic() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAdminAuthenticated') === 'true');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This effect ensures that if the state is ever out of sync with sessionStorage, it gets corrected.
    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(sessionStorage.getItem('isAdminAuthenticated') === 'true');
        };
        window.addEventListener('storage', checkAuth); // Listen for storage changes in other tabs
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogin = (password) => {
        if (password === 'coaching') {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            setIsAuthenticated(true);
            navigate('/admin'); // Redirect to admin panel on successful login
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        setIsAuthenticated(false);
        navigate('/'); // Redirect to home page on logout
    };

    return (
        <>
            <header className="app-header">
                <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>ProCoach</Link>
                
                {/* Hamburger menu button for mobile */}
                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    &#9776; {/* This is the hamburger icon */}
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
    {/* Use NavLink and add a class for styling. The 'end' prop on Home is important! */}
    <NavLink to="/" className="nav-item" onClick={() => setIsMenuOpen(false)} end>
        Home
    </NavLink>
    <NavLink to="/courses" className="nav-item" onClick={() => setIsMenuOpen(false)}>
        Courses
    </NavLink>
    <NavLink to="/resume" className="nav-item" onClick={() => setIsMenuOpen(false)}>
        Resume
    </NavLink>
    <NavLink to="/services" className="nav-item" onClick={() => setIsMenuOpen(false)}>
        Services
    </NavLink>
    <NavLink to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>
        About Us
    </NavLink>
    {isAuthenticated && (
        <NavLink to="/admin" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            Admin Panel
        </NavLink>
    )}
</nav>
            </header>
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/course/:id" element={<CourseDetail />} />
                    <Route path="/resume" element={<ResumePage />} />
                    {/* Add other routes for Courses, Services, About Us when you create them */}
                    <Route path="/courses" element={<CoursesPage />} /> 
                    <Route path="/services" element={<ServicesPage />} /> 
                    <Route path="/about" element={<AboutUsPage />} /> 

                    {/* Protected Admin Route */}
                    <Route 
                        path="/admin" 
                        element={
                            isAuthenticated ? (
                                <AdminPage onLogout={handleLogout} />

                            ) : (
                                <AdminAuth onLogin={handleLogin} />
                            )
                        } 
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}


function App() {
    return (
        <Router>
            <AppLogic />
        </Router>
    );
}

export default App;