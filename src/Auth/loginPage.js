import Button from "../Component/Button";
import {useNavigate  } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()

    const handleOnclick = () => {
        navigate("/user")

    }
    return ( 
        <div>
            <Button 
            onClick={handleOnclick}
            children="Login"
            />
        </div>
     );
}
 
export default Login;