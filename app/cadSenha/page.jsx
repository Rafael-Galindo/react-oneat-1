import React from 'react';

function CadSenha() {
    return (
        <div className="container-rest">
        <form id="formulario_rest" className="form-container-rest" onSubmit={handleSubmit}>
        <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
          />
           <label htmlFor="confirmaSenha">Confirme sua senha</label>
          <input
            type="password"
            name="confirmaSenha"
            value={formData.confirmaSenha}
            onChange={handleInputChange}
          />
        </form>
        </div>
    );
}

export default CadSenha;