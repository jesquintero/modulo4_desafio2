import {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebook, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Formulario from "./Formulario";
import Alert from "./Alert"
import SocialButton from "./SocialButton";

const Registro = (props) => {
    const { mensaje, setMensaje, color, setColor } = props
    const icons = [faFacebook, faLinkedinIn, faGithub]

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                <Col xs={12} md={12}>
                    <h2>Crea una cuenta</h2>
                    <SocialButton icons={icons} />
                <p>o usa tu email para registrarte</p>
                    <Formulario mensaje={mensaje} setMensaje={setMensaje} color={color} setColor={setColor} />
                    {mensaje ? <Alert {...props} /> : null }
                </Col>
            </Row>
        </Container>
           
    );
}

export default Registro;