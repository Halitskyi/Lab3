import Header from "./components/Header.tsx";
import json from "../../../public/data/pallete.json"
import Item from "./components/Item/Item.tsx";
import Footer from "./components/Footer.tsx";
import {ToolsAndProducts} from "./ToolsAndProducts/ToolsAndProducts";
import PandabarCampaigns from "./components/PandabarCampaigns";
import TweetLink from "./components/TweetLink";
import NetworkSidebar from "./components/NetworkSidebar";

const Home = () => {
    return (
        <div className="bg-home bg-homeImg">
            <div className="max-w-[1024px] mx-auto flex flex-col min-h-home">
                <NetworkSidebar/>
                <Header/>
                <PandabarCampaigns/>
                <div className="grid grid-cols-3 gap-y-10">
                    {json.map((element, index) => (
                        <Item key={index} index={index} palette={element}/>
                    ))}
                </div>
                <TweetLink/>
                <ToolsAndProducts/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home