<template>
  <div class="min-h-screen bg-slate-100 p-6">

    <!-- Componente de categorías -->
    <Categorias
      :categorias="categorias"
      :categoria-activa="categoriaSeleccionada"
      @cambiar-categoria="handleCambiarCategoria"
    />

    <!-- Grid de platos filtrados -->
    <GridPlatos :platos="platosFiltrados"/>
  </div>
</template>

<script>
import Categorias from '../components/Categorias.vue'
import GridPlatos from '../components/GridPlatos.vue'

export default {
  name: 'App',
  components: {
    Categorias,
    GridPlatos
  },

  data() {
    return {
      categoriaSeleccionada: 'Todos',
      menu: [],
      cargando: true,
      error: null
    }
  },

  async mounted() {
    try {
      const respuesta = await fetch('/menu.json')
      const datos = await respuesta.json()
      this.menu = datos
    } catch (err) {
      this.error = 'Error cargando el menú'
      console.error(err)
    } finally {
      this.cargando = false
    }
  },

  computed: {
    categorias() {
      const base = ['Todos']
      const otras = [...new Set(this.menu.map(p => p.categoria))]
      return [...base, ...otras]
    },

    platosFiltrados() {
      if (this.categoriaSeleccionada === 'Todos') {
        return this.menu
      }
      return this.menu.filter(p => p.categoria === this.categoriaSeleccionada)
    }
  },

  methods: {
    handleCambiarCategoria(nuevaCategoria) {
      this.categoriaSeleccionada = nuevaCategoria
    }
  }
}
</script>
