<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import SomeComponent from '@/components/SomeComponent.vue'

function clickHandler() {
  console.log('clicked')
}

function dblclickHandler() {
  console.log('double clicked')
}
</script>

<template>
  <main>
    <TheWelcome />
    <SomeComponent></SomeComponent>
  </main>
</template>
