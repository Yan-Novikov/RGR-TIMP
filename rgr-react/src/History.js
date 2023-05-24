import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import DivTextJ from "./texts/HistoryJedi.txt";
import DivTextS from "./texts/HistorySith.txt";
import {ThemeContext} from "./App.js";
import { useContext } from "react";

const History = () => {
    const [checked, setChecked] = useContext(ThemeContext);
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
          const contentElement = document.getElementById('history-content');

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
        <div className="history">
            <Navbar activeEl={"History"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <font color="#fff">
                <div id="history-content">
                    <h1>Тут история ордена.</h1>
                </div>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default History;