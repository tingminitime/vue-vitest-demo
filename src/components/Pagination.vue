<script setup></script>

<template>
  <div>
    <div
      data-test="first"
      @click="$emit('change-page', 'first')"
    >
      第一頁
    </div>
    <div
      data-test="prev"
      @click="$emit('change-page', 'prev')"
    >
      上一頁
    </div>
    <div
      data-test="next"
      @click="$emit('change-page', 'next')"
    >
      下一頁
    </div>
    <div
      data-test="last"
      @click="$emit('change-page', 'last')"
    >
      最後一頁
    </div>
  </div>
</template>
