"use client";

import React, { useState } from 'react';
import { useNavigate } from 'next/router';
import supabase from "@/supabase"; // Supondo que o cliente Supabase esteja configurado
import Swal from 'sweetalert2'; // Para as mensagens de sucesso e erro
import Link from 'next/link';
import style from "./cadProp.css"; 

const CriarProp = () => {
  const [formData, setFormData] = useState({
    nomeProprietario: '',
    cpf: '',
    telefoneProprietario: '',
    cepProprietario: '',
    estadoProprietario: '',
    ruaProprietario: '',
    numeroProprietario: '',
    bairroProprietario: '',
    cidadeProprietario: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Cria o endereço do restaurante
      const addressProprietario = {
        rua: formData.ruaProprietario,
        numero: formData.numeroProprietario,
        cidade: formData.cidadeProprietario,
        estado: formData.estadoProprietario,
        bairro: formData.bairroProprietario,
        cep: formData.cepProprietario
      };
  
      const { data: insertedAddress, error: errorAddress } = await supabase
        .from("EnderecoProprietario")
        .insert(addressProprietario)
        .select("id");
  
      if (errorAddress) {
        throw new Error("Erro ao salvar o endereço do proprietario");
      }
  
      // Cria o proprietario com o endereço inserido e proprietário como null
      const proprietario = {
        nome: formData.nomeProprietario,
        telefone: formData.telefoneProprietario,
        cpf: formData.cpf,
        endereco: insertedAddress[0].id, // Referência ao ID do endereço inserido
      };
  
      const { error: errorProprietario } = await supabase
        .from("Proprietario")
        .insert(proprietario);
  
      if (errorProprietario) {
        throw new Error("Erro ao salvar o Proprietario");
      }

      // Step 1: Fetch the last restaurant record
      const { data: lastRestaurant, error: fetchError } = await supabase
        .from("Restaurante")
        .select("*")
        .order("id", { ascending: false }) // Assuming 'id' is the primary key
        .limit(1)
        .single(); // Get the last record

      if (fetchError) {
        throw new Error("Error fetching the last restaurant record");
      }

      // Step 2: Update the last restaurant record with the owner ID
      const { error: updateError } = await supabase
        .from("Restaurante")
        .update({ proprietario: proprietario.id }) // Update the owner ID
        .eq("id", lastRestaurant.id); // Match the last restaurant's ID

      if (updateError) {
        throw new Error("Error updating the restaurant record");
      }
  
      // Exibe a mensagem de sucesso usando SweetAlert2
      Swal.fire({
        title: 'Sucesso!',
        text: 'Proprietario cadastrado com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn-confirm', // Classe personalizada para o botão de confirmação
        }
      });
    } catch (error) {
      console.error(error);
  
  
      // Exibe a mensagem de erro usando SweetAlert2
      Swal.fire({
        title: 'Erro!',
        text: error.message || 'Ocorreu um erro ao salvar o Proprietario.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  return (
    <div className="container-rest">
      <form id="formulario_rest" className="form-container-rest" onSubmit={handleSubmit}>
        <div className="form-left">
          <h2>Criar Conta</h2>
          <span id="line"></span>

          <label htmlFor="nomeProprietario">Nome do Proprietario</label>
          <input
            type="text"
            name="nomeProprietario"
            placeholder="Digite o nome do Proprietario"
            value={formData.nomeProprietario}
            onChange={handleInputChange}
          />

          <div className="row">
            <div className="div-cpf">
              <label htmlFor="cnpj">CPF</label>
              <input
                type="text"
                name="cpf"
                placeholder="Digite seu CPF"
                value={formData.cpf}
                onChange={handleInputChange}
              />
            </div>

            <div className="div-telefone">
              <label htmlFor="telefoneProprietario">Telefone do Proprietario</label>
              <input
                type="text"
                name="telefoneProprietario"
                placeholder="Telefone do Proprietario"
                value={formData.telefoneProprietario}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="div-cep">
              <label htmlFor="cepProprietario">CEP do Proprietario</label>
              <input
                type="text"
                name="cepProprietario"
                className="cep"
                placeholder="Digite seu CEP"
                maxLength="9"
                value={formData.cepProprietario}
                onChange={handleInputChange}
                onBlur={() => handleCepBlur(formData.cepProprietario)}
              />
            </div>

            <div className="div-estado">
              <label htmlFor="estadoProprietario">Estado</label>
              <input
                type="text"
                name="estadoProprietario"
                className="estado"
                placeholder="Digite o estado do proprietario"
                value={formData.estadoProprietario}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-right">
          <div className="row">
            <div className="div-rua">
              <label htmlFor="ruaProprietario">Rua</label>
              <input
                type="text"
                name="ruaProprietario"
                placeholder="Digite o endereço do proprietario"
                value={formData.ruaProprietario}
                onChange={handleInputChange}
              />
            </div>

            <div className="rua-numero">
              <div>
                <label htmlFor="numeroProprietario">Número</label>
                <input
                  type="text"
                  name="numeroProprietario"
                  placeholder="Nº"
                  value={formData.numeroProprietario}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <label htmlFor="bairroProprietario">Bairro</label>
          <input
            type="text"
            name="bairroProprietario"
            placeholder="Digite o bairro do proprietario"
            value={formData.bairroProprietario}
            onChange={handleInputChange}
          />

          <label htmlFor="cidadeProprietario">Cidade</label>
          <input
            type="text"
            name="cidadeProprietario"
            placeholder="Digite a cidade do proprietario"
            value={formData.cidadeProprietario}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" id="btn_prox" className="btn-rest">
          Concluir
        </button>
      </form>
      <p className="login-link">
        Já tem uma conta? <a href="./index.html">Faça o login</a>
      </p>
    </div>
  );
};

export default CriarProp;
