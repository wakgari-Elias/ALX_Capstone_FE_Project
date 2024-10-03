import React from 'react';
import PropTypes from 'prop-types'; 

const ErrorMessage = ({ message }) => {
    return (
        <p className='text-gray-50 text-xl capitalize rounded-md p-4 mt-4'>
            {message}
        </p>
    );
};

// Add prop validation
ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired, 
};

export default ErrorMessage;
