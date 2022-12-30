import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = (data) => {
        console.log(data);

        createUser(data.email, data.password, data.role)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('User Created Successfully.')
                navigate('/')
                // const userInfo = {
                //     displayName: data.name
                // }
                // updateUser(userInfo)
                //     .then(() => {
                //         console.log("User info updated");
                //         navigate('/dashboard');
                //     })
                //     .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

    }

    return (
        <div className='w-[450px] mx-auto shadow-xl p-7 my-4'>
            <h2 className='text-2xl text-center text-primary font-bold'>Sign Up</h2>

            <form onSubmit={handleSubmit(handleSignUp)}>

                <div className="mb-4">
                    <label className="form-label inline-block mb-2 text-gray-700">
                        <span className="">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: "Email Address is required" })} className="block w-full px-3
                        py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>


                <div className="mb-4">
                    <label className="form-label inline-block mb-2 text-gray-700">
                        <span className="">Password</span>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        className="block w-full px-3
                        py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />

                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                    
                </div>

                <div className="text-center">
                    <input type="submit" class="px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        value='Sign Up' />
                </div>

            </form>

            <p className='text-center'>Already have an account? <Link to='/login' className='text-indigo-600'>Login</Link></p>



            {/* <div className="text-center">
                <div className="text-center my-4 font-bold">OR</div>

                <button onClick={handleGoogleSignIn} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
            </div> */}
        </div>
    );
};

export default SignUp;