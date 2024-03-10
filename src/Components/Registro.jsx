import { faFacebook, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = () => {
    const icons = [faFacebook, faLinkedinIn, faGithub]

    return (
        <>
            <h1>Crea una cuenta</h1>
            <SocialButton icons={icons} />
            <p>o usa tu email para registrarte</p>
            <Formulario />
        </>
    )
};



export default Registro;