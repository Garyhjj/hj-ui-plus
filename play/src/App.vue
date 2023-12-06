<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />

      <hj-button msg="good boy"></hj-button>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <hj-loop-play style="height: 200px; width: 100px">
    <div style="background: red; height: 50px"></div>
    <div style="background: blue; height: 50px"></div>
    <div style="background: green; height: 50px"></div>
    <div style="background: yellow; height: 50px"></div>
    <div style="background: pink; height: 50px"></div>
    <div style="background: #0a2540; height: 50px"></div>
    <div style="background: #777; height: 50px"></div>
  </hj-loop-play>
  <hj-loop-play style="height: 50px; width: 80px" direction="x">
    <div style="display: flex">
      <div style="background: red; height: 50px; width: 50px"></div>
      <div style="background: blue; height: 50px; width: 50px"></div>
      <div style="background: green; height: 50px; width: 50px"></div>
      <div style="background: yellow; height: 50px; width: 50px"></div>
      <div style="background: pink; height: 50px; width: 50px"></div>
      <div style="background: #0a2540; height: 50px; width: 50px"></div>
      <div style="background: #777; height: 50px; width: 50px"></div>
    </div>
  </hj-loop-play>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
