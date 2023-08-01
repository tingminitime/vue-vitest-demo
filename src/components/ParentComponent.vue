<script setup>
import { ref, provide, readonly } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(1)
provide('count', readonly(count))
</script>

<template>
  <div>
    <ChildComponent></ChildComponent>
  </div>
</template>
