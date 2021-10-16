import React, {useState} from 'react';
import {useHistory} from "react-router-dom"

const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email === "admin@admin.com" && user.password === "123456"){
            localStorage.setItem("isAuth", "true")
            history.push("/news")
        }
    }
    return (
        <div className="font-sans">
            <div className="relative pt-20 flex flex-col sm:justify-center items-center bg-white-100 ">
                <div className="relative sm:max-w-sm w-full">

                    <div className="LogIn relative w-full rounded-3xl  px-6 py-4 bg-gray-200 shadow-md" >

                        <div className="flex mt-2 items-center text-center">

                        </div>

                        <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>

                            <div>
                                <input type="email" placeholder="your email" onChange={handleChange}
                                       className="px-6 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <input type="password" placeholder="your password" onChange={handleChange}
                                       className="px-6 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <button
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>

                            <div className="flex mt-7 items-center text-center">

                            </div>



                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;