<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      :src="plato.imagen"
      :alt="plato.nombre"
      class="w-full h-40 object-cover"
    />

    <div class="p-4">
      <h2 class="text-xl font-semibold mb-1">
        {{ plato.nombre }}
      </h2>

      <p class="text-sm text-gray-500 mb-2">
        {{ plato.categoria }}
      </p>

      <p class="text-gray-700 mb-3">
        {{ plato.descripcion }}
      </p>

      <p class="text-lg font-bold text-orange-600">
        {{ plato.precio.toFixed(2) }} €
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarjetaPlato',
  props: {
    plato: {
      type: Object,
      required: true
    }
  }
}
</script>
