<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()
const { count, inc, dec } = useCounter(props.initial)
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<template>
  <div class="flex items-center space-x-5 justify-center mt-10 mb-20">
    <button class="btn" data-test="dec" @click="dec()">
      -
    </button>
    <span>{{ count }}</span>
    <button class="btn" data-test="inc" @click="inc()">
      +
    </button>
  </div>
  <div class="flex items-center justify-center">
    <button class="btn" @click="back">
      Back
    </button>
  </div>
</template>
