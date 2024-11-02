
"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation"; // Importa o hook para navegação
import '../clientes/Clientes.css';
import Pagination from '../components/Pagination';


const clientesData = [
  {
    nome: "Antonio Russo",
    telefone: "+559999999999",
    cidade: "São Caetano",
    idade: 25,
    ticketMedio: "R$ 71,00",
    gpsPosicao: 50,
    rua: "Rua 1",
    bairro: "Bairro A",
    cep: "12345-678",
    estado: "SP",
    totalPedidos: 10,
    dataNascimento: "1999-01-01"
  },
  
];

function Clientes() {
  const router = useRouter();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;
  const totalPaginas = Math.ceil(clientesData.length / itensPorPagina);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const clientesVisiveis = clientesData.slice(indiceInicial, indiceInicial + itensPorPagina);

  const handleVerDetalhes = (cliente) => {
    // Cria uma URL com query parameters para os dados do cliente
    router.push({
      pathname: '/detalhesClientes',
      query: {
        nome: cliente.nome,
        telefone: cliente.telefone,
        cidade: cliente.cidade,
        idade: cliente.idade,
        ticketMedio: cliente.ticketMedio,
        gpsPosicao: cliente.gpsPosicao,
        rua: cliente.rua,
        bairro: cliente.bairro,
        cep: cliente.cep,
        estado: cliente.estado,
        totalPedidos: cliente.totalPedidos,
        dataNascimento: cliente.dataNascimento,
      },
    });
  };
  
  return (
    <div className="clientes-container">
      <header className="clientes-header">
        <button className="tab-button active">Clientes</button>
        <button className="tab-button">Leads</button>
        <button className="sort-button">A - Z</button>
      </header>

      <div className="clientes-table-container">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Cidade</th>
              <th>Idade</th>
              <th>Ticket Médio</th>
              <th>GPS Posição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientesVisiveis.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.idade}</td>
                <td>{cliente.ticketMedio}</td>
                <td>{cliente.gpsPosicao}</td>
                <td>
                  <button className="detalhes-button" onClick={() => handleVerDetalhes(cliente)}>Ver Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination 
        paginaAtual={paginaAtual} 
        totalPaginas={totalPaginas} 
        onChange={setPaginaAtual} 
      />
    </div>
  );
}

export default Clientes;
