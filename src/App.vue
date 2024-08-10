<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://www.electronjs.org/" target="_blank">
      <img src="./assets/electron.svg" class="logo electron" alt="Electron logo" />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="./assets/vite.svg" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://element-plus.org/" target="_blank">
      <img src="./assets/element-plus.svg" class="logo element" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Electron + Vite + Vue + ElementPlus" />
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width: 2.4em; margin-left: .4em;" src="/logo.svg" alt="Logo">
  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #304A50);
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #4F52EE);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #15D27C);
}
.logo.element:hover {
  filter: drop-shadow(0 0 2em #5185FF);
}
</style>
