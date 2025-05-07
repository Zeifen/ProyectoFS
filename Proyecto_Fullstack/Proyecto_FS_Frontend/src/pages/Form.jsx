import { useState, useContext } from "react";
import ConstantsContext from '../context/Context';

const Form = () => {

  const { contextName, contextFirstName, contextSecondName } = useContext(ConstantsContext);

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado");
    setName("");
    setFirstName("");
    setSecondName("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario</h2>
      <form>
        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="name" className="form-label">{contextName}</label>
            <input className="form-control input-size" type="text" placeholder="Ingresa nombre" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="col-sm-12">
            <label htmlFor="firstName" className="form-label">{contextFirstName}</label>
            <input className="form-control input-size" type="text" placeholder="Ingresa apellido paterno" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
          </div>
          <div className="col-sm-12">
            <label htmlFor="secondName" className="form-label">{contextSecondName}</label>
            <input className="form-control input-size" type="text" placeholder="Ingresa apellido materno" value={secondName} onChange={(e) => setSecondName(e.target.value)} required/>
          </div>
          <div className="col-sm-12">
            <button className="btn-primary btn button-login-size" type="submit" onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
