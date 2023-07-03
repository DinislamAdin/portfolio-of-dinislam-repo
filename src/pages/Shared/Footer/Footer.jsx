import {FaFacebook, FaLinkedin} from 'react-icons/fa' 
import Container from '../Container/Container';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center px-16 py-3 bg-neutral-300 text-neutral-content">
                <Container >
                    <div className='lg:flex lg:space-x-52 items-center'>
                        <div className="items-center grid-flow-col text-black">
                            <img className="w-16 rounded-full" src="/din-dev.jpg" alt="" />
                        </div>
                        <p className='text-center text-black'>Copyright © 2023 - All right reserved</p>
                        <div className="flex space-x-5">
                            <FaFacebook className='text-blue-500' size={28} />
                            <FaLinkedin className='text-blue-500' size={28} />
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;