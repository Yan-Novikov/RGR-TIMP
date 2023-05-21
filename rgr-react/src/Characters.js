import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";

const Characters = () => {
    return(
        <div className="characters">
            <Navbar/>
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS/>
                <font color="#fff">
                    <h1>Невероятные персонажи</h1>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Characters;