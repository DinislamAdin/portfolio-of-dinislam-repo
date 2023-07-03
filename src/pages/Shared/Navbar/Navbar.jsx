// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {

    const navItems = <>
        <li><Link className='hover:bg-[#30A2FF] hover:text-white' smooth to="#">Home</Link></li>
        <li><Link className='hover:bg-[#30A2FF] hover:text-white' smooth to="#about-me">About me</Link></li>
        <li><Link className='hover:bg-[#30A2FF] hover:text-white' smooth to="#projects">Projects</Link></li>
        <li><Link className='hover:bg-[#30A2FF] hover:text-white' smooth to="#contact">Contact</Link></li>
    </>

    return (
        <div className="navbar fixed bg-base-100 ">
            <div className="w-11/12 mx-auto">
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold">Din.dev</h2>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl font-semibold">
                        {navItems}
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default Navbar;