import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">CRUD de Usuários</h1>
      <nav className="flex space-x-4 mb-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-600 px-4 py-2 rounded"
              : "text-green-600 hover:bg-green-100 px-4 py-2 rounded"
          }
        >
          Listar
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-600 px-4 py-2 rounded"
              : "text-green-600 hover:bg-green-100 px-4 py-2 rounded"
          }
        >
            Criar
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
