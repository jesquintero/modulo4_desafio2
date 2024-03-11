import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


const Formulario = ({ setMensaje, setColor }) => {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  
  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && email && password && confirm) {
      if (validarEmail(email)) {
        if (password === confirm) {
          setMensaje("Registro exitoso");
          setColor("success");
          setNombre("");
          setEmail("");
          setPassword("");
          setConfirm("");
        } else {
          setMensaje("Las contraseñas no coinciden");
          setColor("danger");
        }
      } else {
        setMensaje("El email no es valido");
        setColor("danger");
      }
    } else {
      setMensaje("Completa todos los campos");
      setColor("danger");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirm">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario;
