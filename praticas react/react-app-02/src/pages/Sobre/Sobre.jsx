import Header from '../../components/Header/Header'
import './Sobre.css'

const tecnologias = ['React', 'Vite', 'CSS']

function Sobre({ mudarPagina }) {
  return (
    <>
      <Header mudarPagina={mudarPagina} />

      <main className="sobre">
      <h1>Sobre o projeto</h1>
      <p>Essa aplicação foi desenvolvida como atividade acadêmica.</p>

      <h2>Tecnologias</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>CSS</li>
      </ul>
    </main>

    </>
  )
}


export default Sobre
