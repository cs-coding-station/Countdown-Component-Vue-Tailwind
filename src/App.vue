<template>
  <CountDown :countDownFrom="countDownFrom" />
</template>

<script setup>
import CountDown from './components/CountDown.vue'

const countDownFrom = 4
</script>

<style></style>
