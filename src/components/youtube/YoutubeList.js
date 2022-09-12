import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
    return ( 
        <div>
            {props.children}
            {YoutubeData.map((item,index) => (
                <YoutubeItem 
                key={item.id} 
                image={item.image} 
                tittle={item.tittle} 
                className={index === 1 ? "abc" : ""}
                />
            ))}
        </div>
     );
}

export default YoutubeList;