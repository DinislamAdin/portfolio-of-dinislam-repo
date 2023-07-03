import Container from "../../Shared/Container/Container";

const Contact = () => {
    return (
       <Container>
            <div className="my-40" id="contact">
                <h1 className="text-2xl text-center font-bold text-[#30A2FF]">Contact Me</h1>
                <div className="text-center">
                    <div>
                        <p><span className="font-bold text-[#30A2FF]">Email:</span> dinislam.adin2004@gmail.com</p>
                    </div>
                    <div>
                        <p><span className="font-bold text-[#30A2FF]">Phone:</span> 01703148643</p>
                        <p><span className="font-bold text-[#30A2FF]">Phone:</span> 01406636212</p>
                    </div>
                    <div>
                        <p><span className="font-bold text-[#30A2FF]">Location:</span> Khulna, Bangladesh</p>
                    </div>
                </div>
            </div>
       </Container>
    );
};

export default Contact;