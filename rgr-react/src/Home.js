import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import { useState } from "react";
import SithMan from "./images/DarthVaider.jpg";
import JediMan from "./images/MaceWindu.jpg";

const Home = () => {
    const [checked, setChecked] = useState(false);
    let changingImage = null;
    let article = "";
    let underArticle = "";
    if(checked)
    {
        article = "Принцип ситха";
        underArticle = "Победа без демонстрации мощи — это иллюзия.";
        changingImage = SithMan;
    }
    else
    {
        article = "Принцип джедая";
        underArticle = "Джедаи не цепляются за прошлое."
        changingImage = JediMan;
    }
    return(
        <div className="home">
            <Navbar activeEl={"Home"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <div class="mainContent">
                    <img src={changingImage} alt="That's not a problem" width="400ex"/>
                    <font color="#fff">
                    <h1>{article}</h1>
                    <p>{underArticle}</p>
                </font>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;