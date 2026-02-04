<template>
  <article class="blog-card">
    <h3>{{ titulo }}</h3>
    <p>{{ descricao }}</p>
  </article>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    titulo: String,
    descricao: String
  }
}
</script>

<style>
.blog-card {
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.blog-card h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.blog-card p {
  font-size: 14px;
  color: #555;
}
</style>
