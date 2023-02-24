<script lang="ts" src="./OptionBar"></script>

<template>
  <div class="option-bar-container">
    <select class="option-bar">
      <option>RANKED</option>
    </select>
    <select class="option-bar">
      <option>RANKED</option>
    </select>
    <select class="option-bar">
      <option>RANKED</option>
    </select>
    <select class="option-bar">
      <option>RANKED</option>
    </select>
    <select class="option-bar">
      <option>RANKED</option>
    </select>
    <button class="btn btn--lg btn--success">UPDATE</button>
  </div>
</template>

<style>
.option-bar {
  @apply w-full flex justify-center;
}
.option-bar-container {
  @apply /* --------------------- */
  /* desktop */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* general design */ flex sm-max:flex-col my-2 gap-2;
}
</style>
