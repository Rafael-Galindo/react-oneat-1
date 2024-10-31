"use client";
import React, {createContext, useContext, useState} from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
const ClientList = () => {
 const history = useHistory();
 const clientes = [
   { id: '1', nome: 'Antonio Russo', telefone: '+55999999999', cidade: 'São Caetano', idade: 25, ticketMedio: 'R$ 71,00' },
   // Adicione mais clientes conforme necessário
 ];
 const handleViewDetails = (cliente) => {
   history.push('/cliente-detalhes', { cliente });
 };
 return (
<div style={styles.container}>
<h2 style={styles.title}>Lista de Clientes</h2>
<div>
       {clientes.map((cliente) => (
<div key={cliente.id} style={styles.clienteContainer}>
<p>{cliente.nome}</p>
<p>{cliente.telefone}</p>
<p>{cliente.cidade}</p>
<p>{cliente.idade} anos</p>
<p>{cliente.ticketMedio}</p>
<button style={styles.detailsButton} onClick={() => handleViewDetails(cliente)}>
             Ver detalhes do cliente
</button>
</div>
       ))}
</div>
</div>
 );
};
const styles = {
 container: { padding: '20px' },
 title: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' },
 clienteContainer: { marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' },
 detailsButton: { color: '#00bfa5', marginTop: '10px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', textDecoration: 'underline' },
};
export default ClientList;