"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation'; // Importa o hook correto para acessar os parâmetros da URL
import '../detalhesClientes/ClientesDetalhes.css';

function ClienteDetalhes() {
  const searchParams = useSearchParams();

  // Recupera cada parâmetro usando searchParams.get()
  const cliente = {
    nome: searchParams.get("nome"),
    telefone: searchParams.get("telefone"),
    rua: searchParams.get("rua"),
    bairro: searchParams.get("bairro"),
    cep: searchParams.get("cep"),
    cidade: searchParams.get("cidade"),
    estado: searchParams.get("estado"),
    totalPedidos: searchParams.get("totalPedidos"),
    idade: searchParams.get("idade"),
    dataNascimento: searchParams.get("dataNascimento"),
  };

  return (
    <div className="detalhes-container">
      <h2>Detalhes do Cliente</h2>
      <table className="detalhes-table">
        <tbody>
          <tr>
            <td><strong>Nome:</strong></td>
            <td>{cliente.nome}</td>
          </tr>
          <tr>
            <td><strong>Telefone:</strong></td>
            <td>{cliente.telefone}</td>
          </tr>
          <tr>
            <td><strong>Rua:</strong></td>
            <td>{cliente.rua}</td>
          </tr>
          <tr>
            <td><strong>Bairro:</strong></td>
            <td>{cliente.bairro}</td>
          </tr>
          <tr>
            <td><strong>CEP:</strong></td>
            <td>{cliente.cep}</td>
          </tr>
          <tr>
            <td><strong>Cidade:</strong></td>
            <td>{cliente.cidade}</td>
          </tr>
          <tr>
            <td><strong>Estado:</strong></td>
            <td>{cliente.estado}</td>
          </tr>
          <tr>
            <td><strong>Total de Pedidos:</strong></td>
            <td>{cliente.totalPedidos}</td>
          </tr>
          <tr>
            <td><strong>Idade:</strong></td>
            <td>{cliente.idade}</td>
          </tr>
          <tr>
            <td><strong>Data de Nascimento:</strong></td>
            <td>{cliente.dataNascimento}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}

export default ClienteDetalhes;
