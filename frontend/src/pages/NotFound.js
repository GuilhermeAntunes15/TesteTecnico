import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-2xl mb-6">Página não encontrada</p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
