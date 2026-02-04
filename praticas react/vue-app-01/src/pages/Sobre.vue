<template>
  <div>
    <Header :mudarPagina="mudarPagina" />

    <main class="sobre">
      <h1>Sobre o projeto</h1>
      <p>Essa aplicação foi desenvolvida como atividade acadêmica.</p>

      <h2>Tecnologias</h2>
      <ul>
        <li v-for="(tec, index) in tecnologias" :key="index">
          {{ tec }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Sobre',

  props: {
    mudarPagina: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      tecnologias: ['Vue', 'Vite']
    }
  },

  components: {
    Header
  }
}
</script>

<style scoped>
.sobre {
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.sobre h1 {
  font-size: 28px;
  margin-bottom: 16px;
}

.sobre h2 {
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #2f80ed;
}

.sobre p {
  max-width: 800px;
  text-align: center;

  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 12px;
}

.sobre ul {
  list-style: none;
  padding: 0;
}

.sobre li {
  margin-bottom: 6px;
}

</style>