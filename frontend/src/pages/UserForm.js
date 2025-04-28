import React, { useState, useEffect } from 'react';
import { createUser, getUser, updateUser } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserForm() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id }   = useParams();

  useEffect(() => {
    if (id) {
      getUser(id).then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
      });
    }
    else {
        setName('');
        setEmail('');
    }
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    const action = id
      ? updateUser(id, { name, email })
      : createUser({ name, email });

    action.then(() => navigate('/'));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {id ? 'Editar Usuário' : 'Criar Usuário'}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nome</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? 'Atualizar' : 'Criar'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:underline"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
