<template>
  <hj-button :msg="msg"></hj-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello custom component')
</script>
