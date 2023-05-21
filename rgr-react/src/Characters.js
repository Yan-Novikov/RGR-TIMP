import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import { useState } from "react";

const Characters = () => {
    const [checked, setChecked] = useState(false);
    return(
        <div className="characters">
            <Navbar activeEl={"Characters"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <font color="#fff">
                    <h1>В скором времени тут появятся известные представители ордена.</h1>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Characters;