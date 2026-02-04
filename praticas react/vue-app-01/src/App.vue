<template>
  <div>
    <Home v-if="pagina === 'home'" :mudarPagina="setPagina" />
    <Sobre v-else-if="pagina === 'sobre'" :mudarPagina="setPagina" />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Sobre from './pages/Sobre.vue'

export default {
  name: 'App',

  components: {
    Home,
    Sobre
  },

  data() {
    return {
      pagina: 'home'
    }
  },

  methods: {
    setPagina(novaPagina) {
      this.pagina = novaPagina
    }
  }
}
</script>

