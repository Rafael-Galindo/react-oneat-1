import React from 'react';

const RecentOrders = () => {
  return (
    <div className="recent-order">
      <h2>Pedidos Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>ID do Produto</th>
            <th>Método de Pagamento</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coxinha</td>
            <td>22</td>
            <td>Dinheiro</td>
            <td className="success">Entregue</td>
            <td className="primary">Detalhes</td>
          </tr>
          <tr>
            <td>Coxinha</td>
            <td>22</td>
            <td>Dinheiro</td>
            <td className="success">Entregue</td>
            <td className="primary">Detalhes</td>
          </tr>
          <tr>
            <td>Coxinha</td>
            <td>22</td>
            <td>Dinheiro</td>
            <td className="success">Entregue</td>
            <td className="primary">Detalhes</td>
          </tr>
          <tr>
            <td>Coxinha</td>
            <td>22</td>
            <td>Dinheiro</td>
            <td className="success">Entregue</td>
            <td className="primary">Detalhes</td>
          </tr>
          <tr>
            <td>Coxinha</td>
            <td>22</td>
            <td>Dinheiro</td>
            <td className="success">Entregue</td>
            <td className="primary">Detalhes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
