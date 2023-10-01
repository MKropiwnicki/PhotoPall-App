import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth();

    if(user) {

        return children
    } else {
        console.log(user)
            return <Navigate to='/'/>;
    }

    // if (!user) {
    //     console.log('wrong user')
    //     return <Navigate to='/'/>;
    // } else {
    //     console.log(user)
    //     return children;
    // }

};

