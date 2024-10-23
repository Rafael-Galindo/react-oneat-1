"use client"; // Adiciona esta linha no início para indicar que este é um Client Component

import React, { useEffect, useState } from "react";
import supabase from "@/supabase";

const Fornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const fetchFornecedores = async () => {
      const { data: fornecedoresData, error } = await supabase
        .from("Fornecedor")
        .select(`
          id,
          nome,
          telefone,
          cnpj,
          produto_fornecido,
          endereco ( rua, numero, cidade)
        `); // Faz o relacionamento com a tabela de EnderecoFornecedor via chave estrangeira 'endereco'

      if (error) {
        console.error("Erro ao buscar fornecedores: ", error);
      } else {
        setFornecedores(fornecedoresData); // Armazena os fornecedores com seus endereços
      }
    };

    fetchFornecedores();
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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody id="supplier-list">
              {fornecedores.length > 0 ? (
                fornecedores.map((fornecedor, index) => (
                  <tr key={fornecedor.id}>
                    <td>{fornecedor.nome}</td>
                    <td>{fornecedor.telefone}</td>
                    <td>{fornecedor.cnpj}</td>
                    <td>{fornecedor.produto_fornecido}</td>
                    <td>{fornecedor.endereco ? fornecedor.endereco.rua : "N/A"}</td>
                    <td>{fornecedor.endereco ? fornecedor.endereco.numero : "N/A"}</td>
                    <td>{fornecedor.endereco ? fornecedor.endereco.cidade: "N/A"}</td>
                    <td>
                      <button onClick={() => editarFornecedor(index)}>
                        Editar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">Nenhum fornecedor encontrado</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Fornecedores;
