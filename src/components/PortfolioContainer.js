import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import ProjectCard from './pages/ProjectCard';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Projects') {
            return <ProjectCard />;
        }
        if (currentPage === 'Contact') {
            return <ContactForm />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}