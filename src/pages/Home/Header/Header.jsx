/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react"
import backgroundanime from "../../../assets/82095-additional-animated-blue-background.json";
import { PiHandWavingFill } from 'react-icons/pi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Container from "../../Shared/Container/Container";
import './Header.css';


const Header = () => {

    return (
        <Container>
            <div>
                <p className="h-40"></p>
                <div className="lg:flex md:flex-none lg:gap-4">
                    <div className="w-full space-y-2">
                        <h1 className="text-[40px] font-bold uppercase inline-block">full-stack web developer<PiHandWavingFill className="inline-flex ms-4 text-[#FFD89C]" /></h1>
                        <p>Hi! I am Din Islam. A passionate full-stack web developer based in Khulna, Bangladesh</p>
                        <div className="flex gap-3">
                            <a href=""><AiFillLinkedin size={30} /></a>
                            <a href="https://github.com/DinislamAdin" target="_blank"><AiFillGithub size={30} /></a>
                        </div>
                    </div>
                    <div className="w-full ms-24 image">
                    </div>
                </div>

                <Lottie className="" backgroundanime={backgroundanime} />
            </div>
        </Container>
    );
};

export default Header;