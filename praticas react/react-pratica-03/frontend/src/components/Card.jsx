import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ car }) {
  return (
    <Link to={`/anuncio/${car.id}`} className="card-link">
      <div className="card">
        <img
          src={car.imagemUrl}
          alt={car.titulo}
          className="card-image"
        />

        <h2>{car.titulo}</h2>

        <p className="descricao">{car.descricao}</p>

        <ul>
          <li>
            <span>Ano:</span> {car.ano}
          </li>
          <li>
            <span>Quilometragem:</span> {car.quilometragem} km
          </li>
          <li>
            <span>Preço:</span> R$ {car.preco}
          </li>
        </ul>

        <div className="vendedor">
          <h4>Contato do vendedor</h4>
          <p><strong>Nome:</strong> {car.vendedor.nome}</p>
          <p><strong>Telefone:</strong> {car.vendedor.telefone}</p>
          <p><strong>Email:</strong> {car.vendedor.email}</p>
        </div>
      </div>
    </Link>
  );
}
