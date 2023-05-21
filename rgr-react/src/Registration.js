import "./styles/registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
    document.body.style.backgroundImage = "none";
    return(
        <div className="registration">
            <div class="main-block">
                <div class="logo-block">
                    <img src={require("./images/Logo.png")} alt="Sorry..." class="logo-style" />
                </div>
                <div class="head-text-block">
                    Sign Up
                </div>
                <div class="registration-block">
                    <div class="reg-uname">
                        Enter your username:
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div class="reg-uemail">
                        Enter your email:
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div class="reg-upasswd" >
                        Enter your password:
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <Link Link to="/">
                    <button type="button" class="sign-in-button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;