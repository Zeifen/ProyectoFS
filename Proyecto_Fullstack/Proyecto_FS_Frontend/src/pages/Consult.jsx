import { useState, useContext, useEffect } from "react";
import ConstantsContext from '../context/Context';

const Consult = () => {

  const { contextName, contextFirstName, contextSecondName } = useContext(ConstantsContext);
  const [users, setUsers] = useState([]);
  const UsersAPI = import.meta.env.VITE_USERS_API

  useEffect(() => {
    fetch(UsersAPI)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error al consultar usuarios:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Usuarios registrados</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados aún.</p>
      ) : (
        <ul className="list-group">
          {users.map((user, index) => (
            <li className='list-group-item' key={user._id}>
              <h3> {contextName} : {user.name}</h3>
              <h3> {contextFirstName} : {user.firstName}</h3>
              <h3> {contextSecondName} : {user.secondName}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Consult;
