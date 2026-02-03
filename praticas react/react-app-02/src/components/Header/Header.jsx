import './Header.css'

function Header({ mudarPagina }) {
  return (
    <header className="header">
      <button onClick={() => mudarPagina('home')}>Blog</button>
      <button onClick={() => mudarPagina('sobre')}>Sobre</button>
      <button>Descrição</button>
    </header>
  )
}

export default Header
