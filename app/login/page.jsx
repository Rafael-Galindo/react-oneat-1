"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Usado para otimizar imagens no Next.js
import eyeOff from '../public/img/eye-off.svg';
import eyeOn from '../public/img/eye.svg';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const togglePassword = () => {
    const senha = document.getElementById("senha1");
    const type = senha.getAttribute("type") === "password" ? "text" : "password";
    senha.setAttribute("type", type);
  };

  return (
    <div id="page" className="flex">
      <div>
        <header>
          <a href="../">
            <img src="" alt="" />
          </a>
        </header>
        <main>
          <div className="headline">
            <h1>Bem-vindo(a) ao <br /><span id="title">OnEat Business!</span></h1>
          </div>
          <form action="" method="">
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="input-wrapper">
              <div className="label-wrapper flex">
                <label htmlFor="senha"> Senha </label>
                <a href="../cadastro-login/recuperar.html"> Esqueceu a senha? </a>
              </div>

              <input
                type="password"
                id="senha1"
                name="senha1"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              <Image
                onClick={togglePassword}
                className="eye"
                src={eyeOff}
                alt="Eye off"
              />
              <Image
                onClick={togglePassword}
                className="eye hide"
                src={eyeOn}
                alt="Eye on"
              />
            </div>

            <button type="submit">Entrar</button>

            <div className="create-account">
              Ainda não tem uma conta? 
              <a href="../cadastro-empresas/index2.html"> Cadastre-se </a>
            </div>
          </form>
        </main>
      </div>
      <img src="../img/empresas-login/empresas-login.png" alt="" />
    </div>
  );
}
