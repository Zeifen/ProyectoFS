import React, { useState, useEffect } from 'react';

const CrudPage = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, firstName, secondName };

    try {
      if (editId) {
        await fetch(`http://localhost:3000/users/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        setEditId(null);
      } else {
        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        console.log("Usuario creado");
      }
      setName('');
      setFirstName('');
      setSecondName('');
      fetchUsers();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setFirstName(user.firstName);
    setSecondName(user.secondName);
    setEditId(user._id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
      });
      fetchUsers();
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Ejercicio CRUD</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required className="form-control mb-2" />
        <input type="text" placeholder="Apellido Paterno" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="form-control mb-2" />
        <input type="text" placeholder="Apellido Materno" value={secondName} onChange={(e) => setSecondName(e.target.value)} required className="form-control mb-2" />
        <button className="btn btn-primary w-100" type="submit">
          {editId ? 'Actualizar' : 'Enviar'}
        </button>
      </form>

      <h3>Usuarios registrados</h3>
      {users.length === 0 ? (
        <p>No hay usuarios aún.</p>
      ) : (
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {user.name} {user.firstName} {user.secondName}
              </span>
              <span>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user._id)}>Eliminar</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CrudPage;
