import { useState, useContext } from "react";
import ConstantsContext from '../context/Context';
import { useNavigate } from "react-router-dom";

const Form = () => {

  const navigate = useNavigate();
  const { contextName, contextFirstName, contextSecondName } = useContext(ConstantsContext);

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, firstName, secondName };
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      console.log(result);
      setName("");
      setFirstName("");
      setSecondName("");
    } catch (error) {
      console.error('Error al enviar:', error);
    }
  };

  const handleConsult = () => {
    navigate("/consult");
  };  

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario</h2>
      <form onSubmit={handleSubmit}>
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
            <button className="btn-primary btn button-login-size" type="submit">Enviar</button>
          </div>
        </div>
      </form>
      <div className="col-sm-12">
        <button className="btn-primary btn button-login-size" type="submit" onClick={handleConsult}>Consultar datos</button>
      </div>
    </div>
  );
};

export default Form;
