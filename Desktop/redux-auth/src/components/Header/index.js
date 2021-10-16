import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        //     <div className="container flex justify-between py-5 px-4 mx-auto">
        //         <Link to="/">Your logo</Link>
        //         <ul>
        //             <li><Link to="/" className="mr-3">Home</Link></li>
        //             <li><Link to="/news" className="mr-3">News</Link></li>
        //             <li><Link to="/login">Login</Link></li>
        //         </ul>
        //     </div>
        //
        <header>
        <nav className="flex items-center bg-gray-800 p-4 flex-wrap">
            <Link to="/">
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-white h-7 w-8 mr-2 mb-2 inline-block"
                >
                    <path
                        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                    />
                </svg>
                <span className="text-xl text-white font-bold uppercase tracking-wide"
                >Tailwind CSS</span></Link>

            <div
                className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                id="navigation">
                <div
                    className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                >
                    <Link
                        to="/"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                    >
                        <span>Home</span>
                    </Link>



                    <Link
                       to="/news"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                    >
                        <span>News</span>
                    </Link>
                    <Link
                        to="/login"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                    >
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </nav>
</header>
    );
};

export default Header;