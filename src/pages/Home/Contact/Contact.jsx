import Container from "../../Shared/Container/Container";
import { BiLogoGmail } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'


const Contact = () => {
    return (
       <Container>
            <div className="my-48" id="contact">
                <h1 className="text-2xl text-center font-bold text-[#30A2FF]   mb-10">Contact Me</h1>
                <div className="lg:flex md:flex-none justify-between">
                    <div>
                        <BiLogoGmail className="w-full mx-auto text-[#30A2FF]" size={40}/>
                        <p><span className="font-bold text-[#30A2FF]">Email:</span> dinislam.adin2004@gmail.com</p>
                    </div>
                    <div>
                        <BsFillTelephoneFill className="w-full mx-auto text-[#30A2FF]" size={40} />
                        <p><span className="font-bold text-[#30A2FF] ">Phone:</span> 01703148643</p>
                        <p><span className="font-bold text-[#30A2FF] ">Phone:</span> 01406636212</p>
                    </div>
                    <div>
                        <ImLocation className="w-full mx-auto text-[#30A2FF]" size={40} />
                        <p><span className="font-bold text-[#30A2FF]">Location:</span>Daulatpur, Khulna, Bangladesh</p>
                    </div> 
                </div>
            </div>
       </Container>
    );
};

export default Contact;