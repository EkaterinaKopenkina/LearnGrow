import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import Login from "./login";

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {login})(LoginContainer);