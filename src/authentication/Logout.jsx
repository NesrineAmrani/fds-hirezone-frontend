import React from "react";
import AuthUser from "./AuthUser";

const Logout = () => {
    const { token, logout } = AuthUser();
    const userLogout = () => {
        if (token != undefined) {
            logout();
        }
    };

    return (
        <div className='w-32'>
            <button onClick={userLogout} className='w-32 font-bold bg-red-400 shadow-lg text-slate-100 rounded-lg'>
                LogOut
            </button>
        </div>
    );
};

export default Logout;