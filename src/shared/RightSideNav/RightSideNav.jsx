
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl"> Login With</h2>
                <button className="btn btn-outline w-full">
                    {<FaGoogle></FaGoogle>}
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    {<FaGithub></FaGithub>}
                    Login with gitHub
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='flex items-center p-4 text-lg border rounded-t-lg' href=""> 
                <FaFacebook className='mr-3'></FaFacebook>
                <span>Facebook</span>
                </a>
                <a className='flex items-center p-4 text-lg border-x
                ' href=""> 
                <FaTwitter className='mr-3'></FaTwitter>
                <span>Twitter</span>
                </a>
                <a className='flex items-center p-4 text-lg border rounded-b-lg' href=""> 
                <FaInstagram className='mr-3'></FaInstagram>
                <span>Instagram</span>
                </a>
               
            </div>
            <div className="p-4 space-y-3 mb-6 bg-gray-100">
                <h2 className="text-3xl mb-4">Q-zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
             
            </div>
           
        </div>
    );
};

export default RightSideNav;