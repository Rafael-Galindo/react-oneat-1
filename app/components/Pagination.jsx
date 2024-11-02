// components/Pagination.jsx

import React from 'react';
import './Pagination.css';

function Pagination({ paginaAtual, totalPaginas, onChange }) {
  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      <button 
        onClick={() => onChange(Math.max(1, paginaAtual - 1))}
        disabled={paginaAtual === 1}
      >
        &lt;
      </button>
      
      {paginas.map((numero) => (
        <button 
          key={numero} 
          onClick={() => onChange(numero)}
          className={paginaAtual === numero ? 'active' : ''}
        >
          {numero}
        </button>
      ))}

      <button 
        onClick={() => onChange(Math.min(totalPaginas, paginaAtual + 1))}
        disabled={paginaAtual === totalPaginas}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
