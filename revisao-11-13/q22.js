const formulario = document.getElementById("form-cadastro");
const divErros = document.querySelector("#erros");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = formulario.querySelector("#nome").value;
  const preco = formulario.querySelector("#preco").value;
  const categoria = formulario.querySelector("#categoria").value;

  const produto = { nome, preco, categoria };

  const resultadoValidacao = validarProduto(produto);
  renderizarErros(resultadoValidacao);
});

/**
 * @param {{nome: string, preco: string, categoria: string}} p
 * @returns {{ok: boolean, erros: string[]}}
 */
function validarProduto(p) {
  const erros = [];

  if (p.nome.trim() === "") {
    erros.push("O nome não pode estar vazio.");
  }
  if (Number(p.preco) <= 0 || isNaN(Number(p.preco))) {
    erros.push("O preço deve ser um número maior que 0.");
  }
  if (p.categoria.trim() === "") {
    erros.push("A categoria não pode estar vazia.");
  }

  return {
    ok: erros.length === 0,
    erros,
  };
}

function renderizarErros(resultadoValidacao) {
  divErros.innerHTML = ""; // limpa os erros anteriores

  if (resultadoValidacao.ok) {
    const msg = document.createElement("p");
    msg.textContent = "Produto cadastrado com sucesso!";
    msg.style.color = "green";
    divErros.appendChild(msg);
    return;
  }

  const listaErros = document.createElement("ul");
  resultadoValidacao.erros.forEach((erro) => {
    const itemErro = document.createElement("li");
    itemErro.innerText = erro;
    listaErros.appendChild(itemErro);
  });

  divErros.appendChild(listaErros);
}
