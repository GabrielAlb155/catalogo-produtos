import React from "react";

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="produto-card">
      <img src={imagem} alt={nome} />

      <div className="produto-card-content">
        <h3>{nome}</h3>

        <p className="descricao">
          {descricao}
        </p>

        <p className="preco">
          R$ {Number(preco).toFixed(2).replace(".", ",")}
        </p>
      </div>
    </article>
  );
}

export default ProdutoCard;