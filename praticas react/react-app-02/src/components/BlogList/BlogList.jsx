import BlogCard from '../BlogCard/BlogCard'
import './BlogList.css'

function BlogList() {
  return (
    <section className="blog-list">
      <h2>Últimas do blog</h2>

      <BlogCard
        titulo="5 dicas para sua carreira profissional"
        descricao="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
      />

      <BlogCard
        titulo="5 dicas para sua carreira profissional"
        descricao="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
      />

      <a href="#">Ver tudo</a>
    </section>
  )
}

export default BlogList
