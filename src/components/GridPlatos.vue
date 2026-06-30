<template>
  <div>
    <p v-if="platos.length === 0" class="text-center text-gray-500">
      No hay platos en esta categoría.
    </p>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <TarjetaPlato
        v-for="plato in platos"
        :key="plato.id"
        :plato="plato"
      />
    </div>
  </div>
</template>

<script>
import TarjetaPlato from './TarjetaPlato.vue'

export default {
  name: 'GridPlatos',
  components: {
    TarjetaPlato
  },
  props: {
    platos: {
      type: Array,
      required: true
    }
  }
}
</script>
