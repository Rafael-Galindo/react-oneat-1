"use client";
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientList.css'; 
const ClientList = ({ sortCriterion }) => {
 <router>const navigate = useNavigate();</router>

 const clientes = [
   { id: '1', nome: 'Antonio Russo', telefone: '+55999999999', cidade: 'São Caetano', idade: 25, ticketMedio: 71.00 },
   { id: '2', nome: 'Beatriz Silva', telefone: '+55988888888', cidade: 'Santo André', idade: 30, ticketMedio: 50.00 },
   { id: '3', nome: 'Carlos Souza', telefone: '+55977777777', cidade: 'São Paulo', idade: 22, ticketMedio: 85.00 },
   // Adicione mais clientes conforme necessário
 ];
 const sortedClientes = useMemo(() => {
   return [...clientes].sort((a, b) => {
     if (sortCriterion === 'nome') return a.nome.localeCompare(b.nome);
     if (sortCriterion === 'idade') return a.idade - b.idade;
     if (sortCriterion === 'ticketMedio') return a.ticketMedio - b.ticketMedio;
     return 0;
   });
 }, [sortCriterion, clientes]);
 const handleViewDetails = (cliente) => {
   navigate(`/clientes/${cliente.id}`, { state: { cliente } });
 };
 return (
<div className="client-list">
<h2>Lista de Clientes</h2>
<ul>
       {sortedClientes.map((cliente) => (
<li key={cliente.id} className="client-item">
<p>Nome: {cliente.nome}</p>
<p>Telefone: {cliente.telefone}</p>
<p>Cidade: {cliente.cidade}</p>
<p>Idade: {cliente.idade} anos</p>
<p>Ticket Médio: R$ {cliente.ticketMedio.toFixed(2)}</p>
<button onClick={() => handleViewDetails(cliente)}>Ver detalhes do cliente</button>
</li>
       ))}
</ul>
</div>
 );
};
export default ClientList;