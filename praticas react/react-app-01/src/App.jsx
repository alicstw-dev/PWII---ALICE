import { useEffect, useState } from "react";

import './App.css'
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";


 const App = () => {
   const [cars, setCars] = useState(null);

   useEffect(() => {
    async function fetchCars() {
      const res = await fetch("http://localhost:3000/anuncios");
      const data = await res.json(); //converte o corpo da resposta para um objeto JSON
      setCars(data); 
    }
    fetchCars();
   }, []); //array vazio oara rodar apenas uma vez
  
  
  
   const handleSearch = (query) => {
     if (query === '') {
       setCars(listCars);
       return;
     }

	    // setCars(listCars.filter(car => car.model.includes(query)));
   }

   return (
     <>
       <h1>Anúncios Recentes</h1>
       <SearchBar handleSearch={handleSearch} />
       <div className='cards'>
         {cars&&cars.map((car) => (
           <Card key={car.id} car={car} />
         ))}
       </div>
     </>
   );
};

export default App;
