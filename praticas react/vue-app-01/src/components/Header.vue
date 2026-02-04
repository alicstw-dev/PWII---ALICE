<template>
  <header class="header">
    <button @click="irPara('home')">Blog</button>
    <button @click="irPara('sobre')">Sobre</button>
    <button>Descrição</button>
  </header>
</template>

<script>
export default {
  name: 'Header',

  props: {
    mudarPagina: {
      type: Function,
      required: true
    }
  },

  methods: {
    irPara(pagina) {
      this.mudarPagina(pagina)
    }
  }
}
</script>

<style scoped>
header {
  background-color: #ffffff;
  /* Aumentei um pouco o padding vertical do header também */
  padding: 24px 40px; 

  display: flex;
  justify-content: center;
  
  /* AQUI: Aumentei o espaço entre um botão e outro */
  gap: 60px; 

  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

header button {
  background: none;
  border: none;

  /* AQUI: Aumentei o tamanho da letra */
  font-size: 20px; 
  font-weight: 500;
  cursor: pointer;

  color: #333;
  
  /* AQUI: Aumentei o tamanho clicável do botão */
  padding: 12px 32px; 
  border-radius: 8px; /* Arredondei um pouco mais as bordas */

  transition: background-color 0.2s ease, color 0.2s ease;
}

header button:hover {
  background-color: #f4f4f4;
  color: #2b2dcc;
}
</style>