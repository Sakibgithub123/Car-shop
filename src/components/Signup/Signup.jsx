import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Signup = () => {
    const { createUser } = useContext(AuthContext)
    // const [errors, setErrors] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // setErrors('')
        setNameError('')
        setEmailError('')
        setPasswordError('')
        if (name.valueOf() === "") {
            setNameError('Name field is required')
        }
        if (email.valueOf() === "") {
            setEmailError('Email field is required')
        }
        if (password.valueOf() === "") {
            setPasswordError('Password field is required!')
            return;
        }
        else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters!')
            return;

        }
        else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
            setPasswordError(
                'Password must contain  number, uppercase letter & a special chracter!')
            return;

        }


        createUser(email, password)

            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                console.error(error)
                // setErrors(error.message)
                // ..
            });

    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-row lg:flex-col">
                <div className="text-center  my-3">
                    <h1 className="text-5xl font-bold">Sign Up PAge</h1>
                </div>
                <div className="card  w-full max-w-3xl shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body w-full ">
                        <div className="flex flex-row justify-between">
                            <div className="w-5/12">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter name here.." className="input input-bordered"  />
                                </div>
                                {
                                    nameError && <p className="text-lg text-red-900 font-medium">{nameError}</p>
                                }
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter email here.." className="input input-bordered"  />
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
                            <button type="submit" className="btn btn-primary">Add Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
