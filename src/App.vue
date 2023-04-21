<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <section class="chat">
    <RouterView :key="$route.params.id"></RouterView>
  </section>
</template>

<script lang="ts" src="./App.vue.ts">
// import
import AppHeader from './components/AppHeader.vue';
</script>

<style lang="scss">
@import 'styles';
.chat {
  background-color: $bg-gray-1;
  padding: 23px 200px 0 200px;
  flex-grow: 1;
  height: calc(100vh - 74px);
}
</style>
