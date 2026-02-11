import { useEffect, useState } from "react";
import style from "./Form-contato.module.css";

export default function FormAnuncio() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!error && !success) return;

    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, success]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.target);

    const titulo = formData.get("titulo")?.trim();
    const descricao = formData.get("descricao")?.trim();
    const preco = Number(formData.get("preco"));
    const ano = Number(formData.get("ano"));
    const quilometragem = Number(formData.get("quilometragem"));
    const imagemUrl = formData.get("imagemUrl")?.trim();

    const vendedor = {
      nome: formData.get("vendedorNome")?.trim(),
      telefone: formData.get("vendedorTelefone")?.trim(),
      email: formData.get("vendedorEmail")?.trim(),
    };

    if (
      !titulo ||
      !descricao ||
      !preco ||
      !ano ||
      !quilometragem ||
      !imagemUrl ||
      !vendedor.nome ||
      !vendedor.telefone ||
      !vendedor.email
    ) {
      setError("Preencha todos os campos.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/anuncios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descricao,
          preco,
          ano,
          quilometragem,
          imagemUrl,
          vendedor,
        }),
      });

      if (!response.ok) throw new Error();

      setSuccess(true);
      event.target.reset();
    } catch {
      setError("Erro ao cadastrar anúncio.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={style.formContato} onSubmit={handleSubmit}>
      <h2>Novo Anúncio</h2>

      <label>Título</label>
      <input type="text" name="titulo" required />

      <label>Descrição</label>
      <textarea name="descricao" required />

      <label>Preço</label>
      <input type="number" name="preco" required />

      <label>Ano</label>
      <input type="number" name="ano" required />

      <label>Quilometragem</label>
      <input type="number" name="quilometragem" required />

      <label>URL da Imagem</label>
      <input type="url" name="imagemUrl" required />

      <h3>Dados do Vendedor</h3>

      <label>Nome</label>
      <input type="text" name="vendedorNome" required />

      <label>Telefone</label>
      <input type="text" name="vendedorTelefone" required />

      <label>Email</label>
      <input type="email" name="vendedorEmail" required />

      <button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Cadastrar"}
      </button>

      <div aria-live="polite">
        {error && <p className="error">{error}</p>}
        {success && <p className="result">Anúncio cadastrado com sucesso!</p>}
      </div>
    </form>
  );
}
