import React , {useContext} from "react";
import "./Mockup.css";
import { WallPaperContext } from "../../context/WallPaperContext";




function WallpaperCollection(props) {
    const {setIndexD, isDesk ,setIndexP} =
    useContext(WallPaperContext);

    
    const clickedSlide = () => {
        if(isDesk){
            
            setIndexD(props.index);
        }
        else{
            
            setIndexP(props.index);

        }
    };
        
    return ( 
    <div className = "small-image-box" onClick={clickedSlide}>
        <div className="small-images" 
        style={
            props.active === props.data ? {border:"2px solid black" , padding :"3px"}:{}
        }>
            <img src={props.data} className="img_d" alt="img"/>
        </div>
    </div>
  );
}

export default WallpaperCollection;
