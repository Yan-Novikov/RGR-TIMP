import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import { useState } from "react";
import DivTextJ from "./texts/ShortJedi.txt";
import DivTextS from "./texts/ShortSith.txt";

const Basic = () => {
    const [checked, setChecked] = useState(false);
    let fullText = DivTextJ; 
    if(checked)
    {
        fullText = DivTextS;
    }
    else
    {
        fullText = DivTextJ;
    }
    fetch(fullText)
        .then(response => response.text())
        .then(text => {
          const paragraphs = text.split('\n');
          const contentElement = document.getElementById('basic-content');

          while(contentElement.firstChild){
            contentElement.removeChild(contentElement.firstChild);
        }
          paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            contentElement.appendChild(p);
          });
        });

    return(
        <div className="basic">
            <Navbar activeEl={"Basic"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <font color="#fff">
                <div id="basic-content">
                    <h1>В скором времени тут появится краткая информация об ордене.</h1>
                </div>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Basic;