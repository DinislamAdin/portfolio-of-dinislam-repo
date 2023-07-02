/* eslint-disable react/jsx-no-target-blank */
import Resume from '/Resume-of-Din-Islam.pdf';

const Pdf = () => {
    return (
        <div className='flex gap-11'>
            <a className='btn btn-primary' href={Resume} download={Resume}>Resume</a>
            <a className='btn bg-[#FFABAB] text-white' href='https://drive.google.com/file/d/1zKi0UFOa-RR6g4HXexwehnAv3y4X5vZh/view' target="_blank">View Resume</a>
         </div>
    );
};

export default Pdf;