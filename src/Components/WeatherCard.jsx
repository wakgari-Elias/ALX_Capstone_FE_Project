import React from 'react';
import PropTypes from 'prop-types';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const WeatherCard = ({ weatherData }) => {
    return (
        <>
            <img src={weatherData.icon} alt='Weather Icon' className='w-24 my-6' />
            <p className='text-white text-6xl leading-tight drop-shadow-lg dark:text-gray-200'>
                {weatherData.temperature}°C
            </p>

            
            <p className='text-white text-4xl drop-shadow-md dark:text-gray-200'>
                {weatherData.location}
            </p>


            <div className='w-full flex justify-between border-t border-white/30 mt-10 pt-5 text-white dark:border-gray-600 dark:text-gray-300'>
                <div className='flex items-start gap-3'>
                    <img src={humidity_icon} alt='Humidity Icon' className='w-6 mt-2' />
                    <div>
                        <p>{weatherData.humidity}%</p>
                        <span className='block text-sm text-white/90 dark:text-gray-300'>Humidity</span>
                    </div>
                </div>


                <div className='flex items-start gap-3'>
                    <img src={wind_icon} alt='Wind Icon' className='w-6 mt-2' />
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span className='block text-sm text-white/90 dark:text-gray-300'>Wind Speed</span>
                    </div>
                </div>
            </div>
        </>
    );
};

WeatherCard.propTypes = {
    weatherData: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        windSpeed: PropTypes.number.isRequired,
    }).isRequired,
};

export default WeatherCard;
