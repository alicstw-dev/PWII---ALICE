import BlogCard from '../BlogCard/BlogCard'
import './BlogList.css'

function BlogList() {
  return (
    <section className="blog-list">
      <h2>Últimas do blog</h2>

    <BlogCard
      titulo="Interpretando as Profecias do Oráculo"
      descricao="Entenda por que você nunca deve levar as palavras do Oráculo de Delfos ao pé da letra se quiser sobreviver à sua missão."
    />

    <BlogCard
      titulo="Etiqueta e Disciplina na Legião Romana"
      descricao="Um manual para calouros da Décima Segunda Legião sobre como subir na hierarquia e não irritar o [Terminus](https://riordan.fandom.com)."
    />

    <BlogCard
      titulo="O Guia de Culinária do Chalé de Hefesto"
      descricao="Como usar o fogo das forjas para preparar o melhor marshmallow do acampamento sem causar uma explosão acidental."
    />


      <a href="#">Ver tudo</a>
    </section>
  )
}

export default BlogList
