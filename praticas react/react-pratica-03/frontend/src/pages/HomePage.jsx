import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "../App.css";

export default function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("http://localhost:3000/anuncios");
      const data = await res.json();
      setCars(data);
    }

    fetchCars();
  }, []);

function handleSearch(query) {
  if (!query) return;

  setCars((prevCars) =>
    prevCars.filter((car) =>
      car.titulo.toLowerCase().includes(query.toLowerCase())
    )
  );
}

  return (
    <>
      <h1>Anúncios Recentes</h1>

      <Link to="/cadastro" className="btn-cadastro">
        Cadastrar carro
      </Link>


      <SearchBar handleSearch={handleSearch} />

      <div className="cards">
        {cars && cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}
