import React from "react";
import "../styles/checkmark.css";
import jedi from "../images/JediBack.png";
import sith from "../images/SithBack.jpg";

const CheckJS = function({checked, setChecked}){
    document.body.style.backgroundImage = `url(${jedi})`;
    

    if(checked != true){
        document.body.style.backgroundImage = `url(${jedi})`;
    }
    else if(checked == true){
        document.body.style.backgroundImage = `url(${sith})`;
    }

    return(
        <div class = "choose_side_content">
            <div class = "side_text_j">
              Jedi
            </div>
            <div class = "side_check">
              <input type="checkbox" id="cBox1" checked={checked} onChange={() => setChecked(!checked)}/>
            </div>
            <div class = "side_text_s">
              Sith
            </div>
        </div>
    )
}

export default CheckJS;