import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
           <Link to='\' className="mr-12">
           <Marquee  pauseOnClick={true} speed={100} className="text-xl">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
           </Link>
           <Link to='\' className="mr-12">
           <Marquee  pauseOnClick={true} speed={100} >
                I can be a React component, multiple React components, or just some text.
            </Marquee>
           </Link>
           <Link to='\' >
           <Marquee  pauseOnClick={true} speed={100} >
                I can be a React component, multiple React components, or just some text.
            </Marquee>
           </Link>
            </div>
            )
};

 export default BrakingNews;