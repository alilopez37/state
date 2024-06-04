import { useNavigate, Link } from "react-router-dom";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Anchor from "../atoms/Anchor";
import './Form.css'

function Form() {
    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate("/home")
    }

    return ( 
        <div id="form_login-box">
            <Field name="username" type="text" text="Username" placeholder="P.e. alilopez"></Field>
            <Field name="password" type="password" text="Password" placeholder="Password"></Field>
            <Button title="Iniciar sesión" onClick={handleClick}/>
            <Anchor msn ="No tienes cuenta, " link="/home" text="registrate"/>
            
        </div>
     );
}

export default Form;
