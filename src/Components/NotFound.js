import React from 'react';

/**
 * Stateless function component NotFound is triggered when there is no corresponding results
 */
const NotFound = () => {
    return (
        <li className='not-found'>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
};

export default NotFound;