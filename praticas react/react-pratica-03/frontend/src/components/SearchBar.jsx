import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(query);
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquise pelo título do anúncio..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">
        <BsSearch />
      </button>
    </form>
  );
}
