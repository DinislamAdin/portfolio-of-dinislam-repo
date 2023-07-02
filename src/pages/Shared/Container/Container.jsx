/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="lg:w-[800px] md:w-[700px] sm:w-full mx-auto">
            {children}
        </div>
    );
};

export default Container;