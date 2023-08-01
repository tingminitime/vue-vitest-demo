<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

function increment() {
  counterStore.increment()
}

function decrement() {
  counterStore.decrement()
}
</script>

<template>
  <div>
    <button
      type="button"
      data-test="button_decrement"
      @click="decrement"
    >
      Decrement
    </button>
    <button
      type="button"
      data-test="button_increment"
      @click="increment"
    >
      Increment
    </button>
    <p data-test="content_count">{{ counterStore.count }}</p>
  </div>
</template>
