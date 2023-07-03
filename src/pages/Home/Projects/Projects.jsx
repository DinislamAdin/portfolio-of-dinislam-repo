/* eslint-disable react/jsx-no-target-blank */
import Container from "../../Shared/Container/Container";
import { SiExpress } from 'react-icons/si';
import { BiLogoReact, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi';
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaMusic, FaHamburger } from "react-icons/fa";
import { MdToys } from "react-icons/md";

const Projects = () => {
    return (
        <Container>
            <div id="projects" className="mt-40">
                <h1 className="text-2xl font-bold text-[#30A2FF]">Projects</h1>
                <h1 className="text-2xl font-bold my-5">Each project is a unique pice of development</h1>
                <div className="space-y-28">
                    <div className="lg:flex md:flex-none justify-between  gap-6">
                        <div>
                            <img className="w-full" src="https://i.ibb.co/kmy8GxQ/music.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-3 text-center">Music Maven <FaMusic className="inline-block text-orange-500" size={28}/></h3>
                            <p className="text-center">
                                Music maven is music learning website that user can select a class and enroll the class then they can learn music.
                            </p>
                            <div className="mt-7 flex justify-between items-center ">
                                <BiLogoReact className="text-blue-300" size={28} />
                                <BiLogoNodejs className="text-lime-500" size={28} />
                                <BiLogoMongodb className="text-green-600" size={28} />
                                <SiExpress size={28} />
                            </div>
                            <div className="mt-7 space-x-7">
                                <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://summer-camp-school-59e8d.web.app/" target="_blank" className="font-bold">Live <BsBoxArrowUpRight className="inline-block" size={16} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex md:flex-none justify-between  gap-6">
                        <div>
                            <img className="w-full" src="https://i.ibb.co/T4gFNts/funvila.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-3 text-center">Funville Toys <MdToys className="inline-block text-red-500" size={28}/></h3>
                            <p className="text-center">
                                Funville toy is a toy car E-commerce website that admin can add a toy car and the toy car will be add in all toy car page and all users can buy the toy car.
                            </p>
                            <div className="mt-7 flex justify-between items-center ">
                                <BiLogoReact className="text-blue-300" size={28} />
                                <BiLogoNodejs className="text-lime-500" size={28} />
                                <BiLogoMongodb className="text-green-600" size={28} />
                                <SiExpress size={28} />
                            </div>
                            <div className="mt-7 space-x-7">
                                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://serene-moxie-95506a.netlify.app/" target="_blank" className="font-bold">Live <BsBoxArrowUpRight className="inline-block" size={16} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex md:flex-none justify-between  gap-6">
                        <div>
                            <img className="" src="https://i.ibb.co/sCH7tsM/food.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-2xl font-bold mb-3 text-center">Food Recipe <FaHamburger className="inline-block text-yellow-200" size={28}/></h3>
                            <p className="text-center">
                                Food Recipe is website that chefs can add there own recipe. And all user after login can see all recipe that chefs are added.
                            </p>
                            <div className="mt-7 flex justify-between items-center ">
                                <BiLogoReact className="text-blue-300" size={28} />
                                <BiLogoNodejs className="text-lime-500" size={28} />
                                <BiLogoMongodb className="text-green-600" size={28} />
                                <SiExpress size={28} />
                            </div>
                            <div className="mt-7 space-x-7">
                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-DinislamAdin" target="_blank" className="font-bold">clint code <AiFillGithub className="inline-block" size={20} /></a>
                                <a href="https://food-recipes-auth.web.app/" target="_blank" className="font-bold">Live <BsBoxArrowUpRight className="inline-block" size={16} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Projects;