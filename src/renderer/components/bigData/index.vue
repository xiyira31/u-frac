<template>
  <div>
    <div class="greeting">Hello {{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'bigData',
  data () {
    return {
      enthusiasm: 5
    }
  },
  methods: {
    increment () { this.enthusiasm++ },
    decrement () {
      if (this.enthusiasm > 1) {
        this.enthusiasm--
      }
    }
  },
  computed: {
    exclamationMarks (): string {
      return Array(this.enthusiasm + 1).join('!')
    }
  }
})
</script>

<style scoped>

</style>
