import React from 'react'
import { Outlet, Navigate} from 'react-router-dom';
//import Dashboard from '../pages/Dashboard';
//import SignIn from '../pages/SignIn';
import AuthUser from './AuthUser'

const useAuth = () => {

    const { getToken } = AuthUser();

    if (getToken()) {
        return true;
    }
    else {
        return false;
    }

}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return (
        isAuth ? <Outlet /> : <Navigate to="/" />
    );
}

export default ProtectedRoutes

