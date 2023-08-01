<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const props = defineProps({
  isUserLogin: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

function goToEditPage() {
  console.log(props.isUserLogin)
  if (props.isUserLogin) {
    router.push(`/article/edit`)
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <header class="flex flex-col items-center">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <nav class="flex gap-x-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <button
        type="button"
        data-test="to-edit-page-button"
        @click="goToEditPage"
      >
        Edit
      </button>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
