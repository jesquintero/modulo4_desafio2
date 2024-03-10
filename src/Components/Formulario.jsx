const Formulario = () => {
    return (
        <>
            <form>
                <input name="Name" placeholder="Nombre"/>
                <input name="E-mail" placeholder="tuemail@ejemplo.com"/>
                <input name="Password" placeholder="Contraseña"/>
                <input name="PassConfirm" placeholder="Confirma tu contraseña"/>
                <button>Registrarse</button>
            </form>
        </>
    )
};

export default Formulario;