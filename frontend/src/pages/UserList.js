import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/apiUser';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const loadUsers = () => {
        getUsers(search).then(res => setUsers(res.data));
    };

    useEffect(loadUsers, []);

    const handleDelete = id => {
        if (window.confirm('Você tem certeza que deseja deletar este usuário?')) {
        deleteUser(id).then(loadUsers);
        }
    };

    return (
        <div>
            <div className="mb-4 flex">
                <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-l focus:outline-none"
                />
                <button
                onClick={loadUsers}
                className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r"
                >
                Pesquisar
                </button>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos os usuários</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Nome</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                    <tr key={u.id} className="border-t">
                        <td className="px-4 py-2">{u.id}</td>
                        <td className="px-4 py-2">{u.name}</td>
                        <td className="px-4 py-2">{u.email}</td>
                        <td className="px-4 py-2 space-x-2 text-center">
                        <Link
                            to={`/edit/${u.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            Editar
                        </Link>
                        <button
                            onClick={() => handleDelete(u.id)}
                            className="text-red-600 hover:underline"
                        >
                            Deletar
                        </button>
                        </td>
                    </tr>
                    ))}
                    {users.length === 0 && (
                    <tr>
                        <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                            Nenhum usuário encontrado.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    );
}
