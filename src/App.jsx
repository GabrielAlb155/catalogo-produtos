import React, { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import ProdutoForm from "./components/ProdutoForm";
import produtosIniciais from "./produtos";
import "./styles.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function adicionarProduto(novoProduto) {
    setProdutos((produtosAtuais) => [
      ...produtosAtuais,
      novoProduto
    ]);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <span className="tag">CATÁLOGO</span>

          <h1>Produtos</h1>

          <p>
            Encontre produtos incríveis e cadastre novos itens.
          </p>
        </div>
      </header>

      <main className="container">
        <ProdutoForm adicionarProduto={adicionarProduto} />

        <section>
          <div className="section-header">
            <div>
              <span className="section-tag">CATÁLOGO</span>
              <h2>Nossos produtos</h2>
            </div>

            {!carregando && (
              <span className="contador">
                {produtos.length} produto
                {produtos.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {carregando ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Carregando produtos...</p>
            </div>
          ) : (
            <div className="produtos">
              {produtos.map((produto) => (
                <ProdutoCard
                  key={produto.id}
                  nome={produto.nome}
                  preco={produto.preco}
                  imagem={produto.imagem}
                  descricao={produto.descricao}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;