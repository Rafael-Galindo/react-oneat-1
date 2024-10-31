// components/SortButton.jsx
import React from 'react';
const SortButton = ({ onSort }) => {
 return (
<div>
<button onClick={() => onSort('nome')}>Ordenar por Nome</button>
<button onClick={() => onSort('idade')}>Ordenar por Idade</button>
<button onClick={() => onSort('ticketMedio')}>Ordenar por Ticket Médio</button>
</div>
 );
};
export default SortButton;