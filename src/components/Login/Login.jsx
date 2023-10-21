import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setEmailError('')
        setPasswordError('')


        if (email.valueOf() === "") {
            setEmailError('Email field is required')
        }
        if (password.valueOf() === "") {
            setPasswordError('Password field is required!')
            return;
        }
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                // console.error(error)
                setErrors('Check password or email dont match!',error)
            })

    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const logedInUser = result.user
                console.log(logedInUser)
                setUser(logedInUser)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error('error', error.message)
            })

    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-row lg:flex-col">
                <div className="text-center  my-3">
                    <h1 className="text-5xl font-bold">Login Page</h1>
                </div>
                <div className="card  w-full max-w-3xl shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-full ">
                    {
                           errors && <p className="text-lg text-red-900 font-medium">{errors}</p> 
                        }
                        <div className="flex flex-row justify-between">
                            <div className="w-5/12">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Enter email here.." className="input input-bordered" />
                                </div>
                                {
                                    emailError && <p className="text-lg text-red-900 font-medium">{emailError}</p>
                                }

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter password here.." className="input input-bordered"  />

                                </div>
                                {
                                    passwordError && <p className="text-lg text-red-900 font-medium">{passwordError}</p>
                                }
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogin} className="btn ">Google Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add Car</button>
                        </div>
                    </form>
                </div>
                {
                    user && <p>user:{user.displayName}</p>
                }
            </div>
        </div>
    );
};

export default Login;