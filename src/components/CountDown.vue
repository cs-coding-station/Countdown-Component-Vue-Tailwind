<template>
  <div class="relative flex h-screen w-screen flex-col items-center justify-center">
    <div class="text-center" :class="{ 'scale-0 animate-hideCounter': showNumber === 0 }">
      <div class="relative h-12 w-64 overflow-hidden text-5xl text-red-400">
        <span
          v-for="(number, index) in countDownFrom"
          :key="index"
          :class="{
            'animate-numberIn': number === showNumber,
            'rotate-[120deg] pt-10': showNumber !== number
          }"
          class="absolute left-[50%] top-[50%] -ml-3 -mt-5 origin-bottom"
          @animationend="animationEnd($event, index)"
          ref="spansRefs"
        >
          {{ number }}
        </span>
      </div>
      <h4 class="text-xl uppercase">Get Ready</h4>
    </div>

    <div class="-mt-10" :class="showNumber === 0 ? 'scale-1 animate-showReplay' : 'scale-0'">
      <button class="rounded-md bg-blue-400 px-3 py-2 font-bold text-white" @click="resetCountDown">
        <span>Replay</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ countDownFrom: Number })

const showNumber = ref(4)
const spansRefs = ref([])

function animationEnd(event, index) {
  if (event.animationName === 'numberIn') {
    spansRefs.value[index].classList.add('animate-numberOut')
  } else if (event.animationName === 'numberOut' && showNumber.value >= 0) {
    showNumber.value--
  }
}

function resetCountDown() {
  showNumber.value = props.countDownFrom
}
</script>
