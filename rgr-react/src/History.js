import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";
import { useState } from "react";

const History = () => {
    const [checked, setChecked] = useState(false);
    return(
        <div className="history">
            <Navbar activeEl={"History"} />
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS checked={checked} setChecked={setChecked} />
                <font color="#fff">
                    <h1>В скором времени тут появится история ордена.</h1>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default History;