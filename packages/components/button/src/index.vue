<script setup lang="ts">
import { buttonProps } from './types'

const NAME = 'hj-button'

defineOptions({
  name: NAME
})

const props = defineProps(buttonProps)

const onBtnClick = () => {
  console.log('点击按钮测试', props.msg)
}

</script>

<template>
  <div :class="NAME" type='primary' @click="onBtnClick">{{msg}}</div>
</template>
