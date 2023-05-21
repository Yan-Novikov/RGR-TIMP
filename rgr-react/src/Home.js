import "./styles/checkmark.css";
import Navbar from "./components/Navbar";
import CheckJS from "./components/CheckJS";

const Home = () => {
    return(
        <div className="home">
            <Navbar/>
            <div class="container text-center">
                <div class="row">
                <div class="col-lg-11 col-md-8 mx-auto mainData">
                <CheckJS/>
                <font color="#fff">
                    <h1>Принцип джедая</h1>
                    <p>Джедаи не ищут мести.</p>
                </font>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;