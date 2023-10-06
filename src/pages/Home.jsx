import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews/BrakingNews";
import NewsCards from "../Routers/component/News card/NewsCards";


const Home = () => {
    const news =useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
           
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 border">
                {
                    news.map(aNews=><NewsCards
                    key={aNews._id} news={aNews}></NewsCards>)
                }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;