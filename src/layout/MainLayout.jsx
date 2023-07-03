import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const MainLayout = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <div>
            {
                loading ? <div className='flex justify-center items-center h-screen' >
                    <ScaleLoader color={'#30A2FF'} loading={loading} size={100} />
                </div> :
                 <>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                 </>
            }
            
        </div>
    );
};

export default MainLayout;