import React, { useState } from 'react';
import DarkModeToggle from './Components/DarkModeToggle';
import Weather from './Components/Weather';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen p-8">
            <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            {/* Pass darkMode state as prop to Weather */}
            <Weather darkMode={darkMode} />
        </div>
    );
};

export default App;
