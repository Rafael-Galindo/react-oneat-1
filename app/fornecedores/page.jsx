"use client"; // Adiciona esta linha no início para indicar que este é um Client Component

import React, { useEffect } from "react";


const Fornecedores = () => {

  useEffect(() => {
    // Exemplo de uso de useEffect
    console.log("Página carregada");
  }, []);

  return (
    <div>
      <main>
        <section className="supplier-header">
          <h1>Fornecedores</h1>
        </section>

        <div className="add-supplier">
            <a href="/addFornecedor">
              <button>Adicionar Fornecedor</button>
            </a>
          </div>
        <section className="suppliers-table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Empresa</th>
                <th>Produto Principal</th>
                <th>Rua</th>
                <th>Número</th>
                <th>Cidade</th>
                <th>CEP</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="supplier-list">
              {/* Exemplo de fornecedores */}
              <tr data-index="0">
                <td>Fornecedor 1</td>
                <td>(11) 99999-9999</td>
                <td>Empresa 1</td>
                <td>Produto X</td>
                <td>Rua A</td>
                <td>123</td>
                <td>Cidade A</td>
                <td>12345-678</td>
                <td>
                  <button onClick={() => editarFornecedor(0)}>Editar</button>
                </td>
              </tr>
              {/* Fornecedores serão carregados aqui dinamicamente */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Fornecedores;
