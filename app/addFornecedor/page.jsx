// Declarar que este é um Client Component
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Use o useRouter apenas em Client Components

const AdicionarFornecedor = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    product: "",
    cep: "",
    address: "",
    number: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    // Código que depende do estado ou de outras interações com a interface
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar fornecedor
    console.log(formData); // Exemplo de uso, substitua com sua lógica de salvamento
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleCancel = () => {
    // Redireciona para a página de fornecedores
    router.push("/fornecedores"); // Use o router para navegação
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Adicionar Fornecedor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Produto Principal</label>
          <input
            type="text"
            id="product"
            value={formData.product}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            value={formData.cep}
            maxLength="8"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Número</label>
          <input
            type="number"
            id="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Salvar</button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdicionarFornecedor;
