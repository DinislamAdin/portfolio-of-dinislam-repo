import Pdf from "../../../component/Pdf";
import Container from "../../Shared/Container/Container";

const AboutMe = () => {
    return (
        <Container>
            <div className="mt-40" id="about-me">
                <div className="lg:flex md:flex-none gap-5">
                    <div className="w-full">
                        <img className="w-[450px] h-[300px] rounded-lg" src="https://images.pexels.com/photos/6913721/pexels-photo-6913721.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div>
                            <Pdf></Pdf>
                        </div>
                    </div>
                    <div className="w-full">
                        <h4 className="text-2xl font-bold text-[#30A2FF]">About me</h4>
                        <h2 className="text-4xl font-bold">A dedicated Full-stack Web Developer</h2>
                        <p>
                            As a junior web developer I possess a impressive skills Html, Css, JavaScript, React, Tailwind Css, as well as back-end technologies including Node.js, Express.js, and MongoDB.As a junior developer, I embrace challenges as opportunities for growth. I actively seek out feedback, engage in peer code reviews, and eagerly learn from experienced mentors in the field. I am adaptable and resourceful, always ready to explore new technologies and industry trends to deliver innovative solutions.
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;