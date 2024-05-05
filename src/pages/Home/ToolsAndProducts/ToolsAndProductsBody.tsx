import {toolsAndProductsData} from "./ToolsAndProductItems/toolsAndProductsData";
import {ToolsAndProductsBodyItem} from "./ToolsAndProductItems/ToolsAndProductsBodyItem.js";

export const ToolsAndProductsBody = () => {
    return (
        <div className="w-full">
            {toolsAndProductsData.map((item, index) => (
                <ToolsAndProductsBodyItem
                    key={index}
                    img={item.img}
                    name={item.name}
                    link={item.link}
                >
                    {item.description}
                </ToolsAndProductsBodyItem>
            ))}
        </div>
    );
}