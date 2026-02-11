import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetalhePage.css";

export default function DetalhePage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await fetch(
          `http://localhost:3000/anuncios/${id}`
        );
        const data = await response.json();
        console.log(data); // DEBUG
        setCar(data);
      } catch (error) {
        console.error("Erro ao buscar anúncio:", error);
      }
    }

    fetchCar();
  }, [id]);

  if (!car) return <p>Carregando...</p>;

  return (
    <div className="detalhe-container">
      <img
        src={car.imagemUrl}
        alt={car.titulo}
        className="detalhe-img"
      />

      <h1>{car.titulo}</h1>
      <p>{car.descricao}</p>

      <h2>Especificações</h2>
      <ul>
        <li><strong>Ano:</strong> {car.ano}</li>
        <li><strong>Quilometragem:</strong> {car.quilometragem} km</li>
        <li><strong>Preço:</strong> R$ {car.preco}</li>
      </ul>

      <h2>Contato do Vendedor</h2>
      <div className="contato">
        <p><strong>Nome:</strong> {car.vendedor?.nome}</p>
        <p><strong>Telefone:</strong> {car.vendedor?.telefone}</p>
        <p><strong>Email:</strong> {car.vendedor?.email}</p>
      </div>
    </div>
  );
}
