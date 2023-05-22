import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import { useState } from "react";
import JediDraw from "./images/JCard7.jpg";
import CharactersCards from "./components/CharactersCards";

const Characters = () => {
    const [checked, setChecked] = useState(false);

    let currentSide;

    if(checked)
    {
        currentSide = "Sith";
    }
    else
    {
        currentSide = "Jedi";
    }
    return(
        <div className="characters">
            <Navbar activeEl={"Characters"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <font color="#fff">
                <CharactersCards Side={currentSide} />
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Characters;