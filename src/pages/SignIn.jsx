import React, { useState } from 'react'
import bgImage3 from '../assets/bgImage3.jpg'
import sideLogo from '../assets/sideLogo.png'
import AuthUser from '../authentication/AuthUser'
import { Link } from 'react-router-dom'

const SignIn = () => {

    //Use api to login
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [loginError, setLoginError] = useState();

    const loginSubmit = async (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });

        //Cookies.set('login', 'true');

        // API call
        await http.post("/auth/login", {
            email: data.get("email"), password: data.get("password"),
        }).then((res) => {
            //console.log(res.data);
            setToken(res.data.user, res.data.access_token);
            
        }).catch(error => {

            const loginErr = setLoginError(error.response.data.error);
            if (loginErr !== null) {
                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
            }
            
            //console.log(error.response.data.error);
            //console.log(error.response.data.validation_errors);

            setPasswordError(error.response.data.validation_errors.password);
            setEmailError(error.response.data.validation_errors.email);
            setEmail('');
            setPassword('');
            
        });

    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block relative bg-gradient-to-tr from-black'>
                <img className='absolute h-full w-full object-cover mix-blend-overlay' src={bgImage3} alt='background' />
                <div className='relative mt-20 ml-2 text-white grid grid-cols-1 gap-8'>
                    <h2 className='text-xl uppercase font-bold'>Join US !!</h2>
                    <h1 className='text-6xl font-bold'>
                        Welcome To Flow Designs Solutions HireZone
                    </h1>
                    <p className='text-lg font-bold'>
                        Flow Designs Solutions offers many software solutions with strengths in application architecture and development,<br />
                        This is a platform where you may pass a test in order to fulfill your job application.
                    </p>
                </div>
            </div>
            <div className='bg-gradient-to-tr from-black to-cyan-500 flex flex-col justify-center'>

                <form className='max-w-[400px] w-full mx-auto bg-neutral-500 p-8 px-8 rounded-lg' onSubmit={loginSubmit} >
                    <div className='grid justify-center mb-2'>
                        <img className='h-16 w-60' src={sideLogo} alt='' />
                    </div>
                    <h2 className='text-2xl text-slate-200 font-bold text-center'>
                        SIGN IN
                    </h2>
                    <div className='flex flex-col py-2'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-slate-700">
                            <label className='text-slate-200 font-bold'>Email</label>
                        </span>
                        <input value={email} name='email' id='email' onChange={e => setEmail(e.target.value)} className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="email" placeholder='Your Email' />
                        <span className="text-red-400 text-sm mt-1 ml-1">{emailError}</span>

                    </div>
                    <div className='flex flex-col py-2'>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  text-slate-700">
                            <label className='text-slate-200 font-bold'>Password</label>
                        </span>
                        <input value={password} name='password' id='password' onChange={e => setPassword(e.target.value)} className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none' type="password" placeholder='Your Password' />
                        <span className="text-red-400 text-sm mt-1 ml-1">{passwordError}</span>
                    </div>
                    
                    <div className={`${loginError == null ? "hidden" : ""} bg-red-200 border border-red-400
                    text-red-700 px-4 py-3 rounded relative `} role="alert">
                        <span className="block sm:inline">{loginError}</span>
                    </div>

                    <div className='text-blue-200 flex justify-between py-2'>
                        <label className="flex items-center font-bold" htmlFor="remember">
                            <input className="" type="checkbox" id="remember" name="remember" />
                                <span className="ml-1 text-md">
                                    Remember me
                                </span>
                        </label>
                        <Link to="/recoverpassword">
                            <p className='font-bold'>Forgot Password ?</p>
                        </Link>
                    </div>
                    <button type="submit" className='w-full my-5 py-2 bg-gradient-to-r from-sky-400 to-emerald-400 font-bold
                        shadow-lg shadow-sky-300 hover:from-emerald-300 hover:to-stone-400 text-sky-800 rounded-lg'>
                        Sign In
                    </button>

                    <span className="block text-sm mt-2 text-black sm:text-center dark:text-gray-400">
                        {new Date().getFullYear()}
                        <Link to="/" className="hover:underline">
                            {" "}FDS-HireZone™
                        </Link>. All Rights Reserved.
                    </span>

                </form>
            </div>
        </div>
    )
}

export default SignIn