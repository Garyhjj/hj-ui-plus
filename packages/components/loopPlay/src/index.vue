<template>
  <div
    class="hj-loop-container"
    @mouseenter="stop"
    @mouseleave="move"
    @touchstart="stop"
    @touchend="move"
  >
    <div
      class="hj-loop-inner-container"
      ref="containerEl"
      :class="{ 'hj-direction-x': direction === 'x' }"
    >
      <div class="hj-main-content" ref="contentEl"><slot /></div>
      <div class="hj-copy-content" ref="copyContentEl"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { loopPlayProps } from './types'

const NAME = 'hj-loop-play'

defineOptions({
  name: NAME
})

const props = defineProps(loopPlayProps)

let timeId: any
let currentMoveValue = 0
let interval = 60
let step = 1

const translateType = computed(() => props.direction === 'y' ? 'translateY' : 'translateX')

const containerEl = ref<HTMLElement>()
const contentEl = ref<HTMLElement>()
const copyContentEl = ref<HTMLElement>()

onMounted(() => {
  props.immediate && initAndStart()
})

onBeforeUnmount(() => {
  stop()
})

const initAndStart = () => {
  stop()
  const content = contentEl.value
  const copyContent = copyContentEl.value
  copyContent!.innerHTML = content!.innerHTML
  if (props.roundTime / 1000 < 6) {
    interval = 30
  }
  step = content!.scrollHeight / (props.roundTime / interval)

  setContainerTransitition()

  move()
}

const setContainerTransitition = () => {
  containerEl.value!.style.transition = `all ${interval / 1000}s linear`
}

const move = () => {
  const container = containerEl.value
  if (!container) return
  const t = interval
  const n = (currentMoveValue += step)

  if (n >= contentEl.value!.scrollHeight) {
    container.style.transition = ''
    container.style.transform = `${translateType.value}(0px)`
    currentMoveValue = 0
    setTimeout(() => {
      setContainerTransitition()
      move()
    }, 20)
    return
  }
  container.style.transform = `${translateType.value}(-${n}px)`
  timeId = setTimeout(() => {
    move()
  }, t)
}

const stop = () => {
  clearTimeout(timeId)
}

defineExpose({
  initAndStart
})
</script>
