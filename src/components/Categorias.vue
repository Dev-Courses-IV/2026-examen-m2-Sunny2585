<template>
  <div class="flex flex-wrap justify-center gap-3 mb-6">
    <button
      v-for="cat in categorias"
      :key="cat"
      @click="$emit('cambiar-categoria', cat)"
      class="px-4 py-2 rounded-full border transition"
      :class="categoriaActiva === cat
        ? 'bg-orange-500 text-white border-orange-500'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-100'"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Categorias',
  props: {
    categorias: {
      type: Array,
      required: true
    },
    categoriaActiva: {
      type: String,
      required: true
    }
  }
}
</script>
