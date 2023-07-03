import Container from "../../Shared/Container/Container";
const Projects = () => {
    return (
        <Container>
            <div id="projects" className="mt-40">
                <h1 className="text-2xl font-bold text-[#30A2FF]">Projects</h1>
                <h1 className=" font-medium my-7">every project is unique pice of development</h1>
                <div className="space-y-28">
                    <div className="lg:flex md:flex-none justify-between items-center">
                        <div>
                            <img className="w-full" src="https://i.ibb.co/kmy8GxQ/music.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3>Music Maven</h3>
                        </div>
                    </div>
                    <div className="lg:flex md:flex-none justify-between items-center">
                        <div>
                            <img className="w-full" src="https://i.ibb.co/T4gFNts/funvila.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3>Funvila Toys</h3>
                        </div>
                    </div>
                    <div className="lg:flex md:flex-none justify-between items-center">
                        <div>
                            <img className="" src="https://i.ibb.co/sCH7tsM/food.jpg" alt="" />
                        </div>
                        <div className="w-full">
                            <h3>Food Recipe</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Projects;