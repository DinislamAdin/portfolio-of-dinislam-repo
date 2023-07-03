/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react"
import backgroundanime from "../../../assets/82095-additional-animated-blue-background.json";
import { PiHandWavingFill } from 'react-icons/pi';
import { SiExpress } from 'react-icons/si';
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi';
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
                            <a href="https://www.linkedin.com/in/din-islam-a65b37272/" target="_blank">
                                <AiFillLinkedin size={30} />
                            </a>
                            <a href="https://github.com/DinislamAdin" target="_blank">
                                <AiFillGithub size={30} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full ms-24 image">

                    </div>
                </div>
                <div className="lg:flex sm:flex-none space-x-10 items-center mt-10">
                    <h5 className="text-xl font-medium">Tech Stack <span className="text-[#30A2FF] text-2xl">|</span></h5>
                    <AiFillHtml5 className="text-orange-500" size={28} />
                    <BiLogoCss3 className="text-blue-500" size={28} />
                    <BiLogoJavascript className="text-yellow-400" size={28} />
                    <BiLogoTailwindCss className="text-blue-500" size={28} />
                    <BiLogoReact className="text-blue-300" size={28} />
                    <BiLogoNodejs className="text-lime-500" size={28} />
                    <BiLogoMongodb className="text-green-600" size={28} />
                    <SiExpress size={28} />
                </div>
                <Lottie className="" backgroundanime={backgroundanime} />
            </div>
        </Container>
    );
};

export default Header;