import './BlogCard.css'

function BlogCard({ titulo, descricao }) {
  return (
    <article className="blog-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  )
}

export default BlogCard
