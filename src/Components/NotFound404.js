import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Stateless functional component NotFound404 is created to handle URL mismatch
 * This component is different from NotFound.js which handles no corresponding search results
 */
const NotFound404 = () => {
    return (
        <ul>
            <li className='not-found'>
                <h3>Error 404: No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
                <NavLink to="/">Click here to go back to home page</NavLink>
            </li>
        </ul>
    )
};

export default NotFound404;