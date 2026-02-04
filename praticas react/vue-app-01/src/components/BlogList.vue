<template>
  <section class="blog-list">
    <h2>Últimas do blog</h2>

    <BlogCard
      titulo="Guia de Sobrevivência no Mundo Mortal"
      descricao="Confira dicas essenciais de como camuflar sua aura e evitar ataques de monstros enquanto estiver fora do Acampamento."
    />

    <BlogCard
      titulo="Como Identificar um Deus Disfarçado"
      descricao="Aprenda a reconhecer os sinais da Névoa para não acabar transformado em um golfinho por um deus de mau humor."
    />

    <BlogCard
      titulo="Treinamento com Espadas: O Básico"
      descricao="Um guia prático para iniciantes no Chalé de Ares sobre como empunhar bronze celestial sem perder um membro."
    />


    <a href="#">Ver tudo</a>
  </section>
</template>

<script>

import BlogCard from './BlogCard.vue'

export default {
  name: 'BlogList',
  components: {
    BlogCard
  }
}
</script>

<style>
.blog-list {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.blog-list h2 {
  margin-bottom: 20px;
}

.blog-list a {
  display: inline-block;
  margin-top: 16px;
  color: #2f80ed;
  text-decoration: none;
}

.blog-list a:hover {
  text-decoration: underline;
}
</style>
