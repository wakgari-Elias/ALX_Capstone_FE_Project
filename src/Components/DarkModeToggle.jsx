import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ toggleDarkMode, darkMode }) => {
    return (
        <div className='fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8'>
            <div 
                onClick={toggleDarkMode} 
                className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-200 rounded-full dark:bg-gray-700 cursor-pointer transform transition duration-300'
            >
                <FontAwesomeIcon 
                    icon={darkMode ? faSun : faMoon} 
                    className='text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl'
                />
            </div>
        </div>
    );
};

// Add prop validation
DarkModeToggle.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,       
};

export default DarkModeToggle;
