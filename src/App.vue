<script setup lang="ts">
// import { defineComponent } from "vue";
import { RouterView } from "vue-router";
// import MenuBar from "./components/MenuBar/MenuBar.vue";
// defineComponent({
//   methods: {
//     getTheme() {
//       return localStorage.getItem("user-theme");
//     },
//     getMediaPreference() {
//       const hasDarkPreference = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       if (hasDarkPreference) {
//         return "dark-theme";
//       } else {
//         return "light-theme";
//       }
//     },
//   },
// });
</script>

<template>
  <RouterView />
</template>
