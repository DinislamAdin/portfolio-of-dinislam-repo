/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineDownload } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import Resume from '/Resume-of-Din-Islam.pdf';

const Pdf = () => {
    return (
        <div className='flex gap-11 mt-8 '>
            <button className='btn bg-[#30A2FF] hover:bg-[#00C4FF] focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold'> <a href={Resume} download={Resume}>download Resume<AiOutlineDownload className='inline-block' size={20}/></a></button>
            <button className='btn bg-[#30A2FF] hover:bg-[#00C4FF] focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold'>
                <a href='https://drive.google.com/file/d/1zKi0UFOa-RR6g4HXexwehnAv3y4X5vZh/view' target="_blank">View Resume<CiViewList className='inline-block' size={20} /></a>
            </button>
         </div>
    );
};

export default Pdf;