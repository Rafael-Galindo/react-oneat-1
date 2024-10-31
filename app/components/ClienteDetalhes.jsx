// components/ClienteDetalhes.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ClienteDetalhes.css'; // Arquivo CSS para responsividade
const ClienteDetalhes = () => {
 const location = useLocation();
 const { cliente } = location.state;
 return (
<div className="cliente-detalhes">
<h2>Detalhes do Cliente</h2>
<p><strong>Nome:</strong> {cliente.nome}</p>
<p><strong>Rua:</strong> {cliente.rua || 'Rua Exemplo, 123'}</p>
<p><strong>Bairro:</strong> {cliente.bairro || 'Centro'}</p>
<p><strong>CEP:</strong> {cliente.cep || '00000-000'}</p>
<p><strong>Cidade:</strong> {cliente.cidade}</p>
<p><strong>Estado:</strong> {cliente.estado || 'SP'}</p>
<p><strong>Total de Pedidos:</strong> {cliente.totalPedidos || 5}</p>
<p><strong>Idade:</strong> {cliente.idade} anos</p>
<p><strong>Data de Nascimento:</strong> {cliente.dataNascimento || '01/01/1999'}</p>
<p><strong>E-mail:</strong> {cliente.email || 'cliente@email.com'}</p>
<p><strong>Status de Fidelidade:</strong> {cliente.statusFidelidade || 'Bronze'}</p>
<p><strong>Última Compra:</strong> {cliente.ultimaCompra || '01/10/2024'}</p>
</div>
 );
};
export default ClienteDetalhes;
