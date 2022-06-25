import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    
    const navigate = useNavigate();

    const getToken = () => {
        //const tokenString = sessionStorage.getItem('token');
        const tokenString = window.localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        //const userString = sessionStorage.getItem('user');
        const userString = window.localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    };


    const [token,setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user,token) => {
        //sessionStorage.setItem("token", JSON.stringify(token));
        //sessionStorage.setItem("user", JSON.stringify(user));
        //sessionStorage.setItem("isLoggedIn", true);
        window.localStorage.setItem("token", JSON.stringify(token));
        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("isLoggedIn", true);

        setToken(token);
        setUser(user);
        navigate("/dashboard");
    }

    const logout = () => {
        //sessionStorage.clear();
        window.localStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL:" http://127.0.0.1:8000/api",
        headers:{
            "Content-type" : "application/json"
        }
    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}