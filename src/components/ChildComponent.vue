<script setup>
import { inject } from 'vue'
const count = inject('count')
</script>

<template>
  <p data-test="target">{{ count }}</p>
</template>
