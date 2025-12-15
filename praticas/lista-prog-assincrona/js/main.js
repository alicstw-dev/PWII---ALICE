import { buscarUsuarios } from "./api.js";

const botao = document.getElementById("btnCarregar");
const lista = document.getElementById("listaUsuarios");
const status = document.getElementById("status");

botao.addEventListener("click", async () => {
  lista.innerHTML = "";
  status.textContent = "Carregando usuários...";

  try {
    const usuarios = await buscarUsuarios();

    status.textContent = "Usuários carregados com sucesso!";

    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = `${usuario.name} - ${usuario.email}`;
      lista.appendChild(li);
    });

  } catch (erro) {
    status.textContent = "Erro ao carregar dados da API.";
    console.error(erro);
  }
});
