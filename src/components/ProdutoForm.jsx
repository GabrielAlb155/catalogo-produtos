import React, { useState } from "react";

function ProdutoForm({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: Number(preco),
      descricao,
      imagem:
        imagem || "https://placehold.co/600x400?text=Novo+Produto"
    };

    adicionarProduto(novoProduto);

    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
  }

  return (
    <form className="produto-form" onSubmit={handleSubmit}>
      <h2>Cadastrar produto</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(event) => setPreco(event.target.value)}
        min="0"
        step="0.01"
        required
      />

      <input
        type="url"
        placeholder="URL da imagem"
        value={imagem}
        onChange={(event) => setImagem(event.target.value)}
      />

      <textarea
        placeholder="Descrição do produto"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
        required
      />

      <button type="submit">
        Adicionar produto
      </button>
    </form>
  );
}

export default ProdutoForm;