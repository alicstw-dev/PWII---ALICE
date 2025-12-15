const URL = "https://jsonplaceholder.typicode.com/users";

export async function buscarUsuarios() {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  const dados = await response.json();
  return dados;
}
