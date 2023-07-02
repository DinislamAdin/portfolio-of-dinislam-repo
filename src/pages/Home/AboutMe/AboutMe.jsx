import Pdf from "../../../component/Pdf";
import Container from "../../Shared/Container/Container";

const AboutMe = () => {
    return (
        <Container>
            <div className="mt-40" id="about-me">
                <div className="lg:flex md:flex-none gap-5">
                    <div className="w-full">
                        <img className="w-[450px] h-[300px]" src="https://images.pexels.com/photos/6913721/pexels-photo-6913721.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <Pdf></Pdf>
                    </div>
                    <div className="w-full">
                        <h4 >About me</h4>
                        <h2 className="text-4xl font-bold">A deduction Full-stack Web Developer</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;