import "./styles/authorization.css";
import { Link } from "react-router-dom";

const Authorization = () => {
    document.body.style.backgroundImage = "none";
    return(
        <div className="authorisation">
            <div class="main-block">
                <div class="logo-block">
                    <img src={require("./images/Logo.png")} alt="Sorry..." class="logo-style" />
                </div>
                <div class="head-text-block">
                    Sign In
                </div>
                <div class="authorization-block">
                    <div class="auth-name-email">
                        Enter your username or email:
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    <div class="auth-upasswd">
                    Enter your password:
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    <Link Link to="/">
                    <button type="button" class="sign-in-button">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Authorization;