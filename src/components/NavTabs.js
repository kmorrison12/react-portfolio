import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div class="flex items-center justify-center text-gray-600 capitalize dark:text-gray-300 bg-gray-900 pb-5">
            <a href="#about"
                onClick={() => handlePageChange('About Me')}
                className={currentPage === 'About Me' ? 'mx-2 border-b-2 text-gray-50 border-pink-800 sm:mx-6' : 'mx-2 border-b-2 border-transparent hover:text-gray-400 hover:border-pink-800 sm:mx-6'}>About Me</a>

            <a href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'mx-2 border-b-2 text-gray-50 border-pink-800 sm:mx-6' : 'mx-2 border-b-2 border-transparent hover:text-gray-400 hover:border-pink-800 sm:mx-6'}>Projects</a>

            <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'mx-2 border-b-2 text-gray-50 border-pink-800 sm:mx-6' : 'mx-2 border-b-2 border-transparent hover:text-gray-400 hover:border-pink-800 sm:mx-6'}>Contact</a>
        </div>

    );
}

export default NavTabs;