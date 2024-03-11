import Alert from 'react-bootstrap/Alert';
const Alerta = ({ mensaje, color }) => {
return(
    <>
    <Alert variant={color} className='mt-3'>
          {mensaje}
        </Alert>
    </>
)
}

export default Alerta