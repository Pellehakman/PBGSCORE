<script src="./Nickname" lang="ts"></script>

<template>
  <div class="input-container">
    <div class="input-icon-container">
      <font-awesome-icon
        class="input-show peer animate-spin text-white"
        icon="`fa-solid fa-spinner`"
      />
      <!-- <font-awesome-icon
        class="standard-input-show peer text-warning"
        icon="fa-solid fa-circle-exclamation"
      />
      <font-awesome-icon
        class="standard-input-show peer text-success"
        icon="fa-solid fa-circle-check"
      /> -->
    </div>
    <input
      autofocus
      type="nickname"
      id="nickname"
      class="input-field peer"
      placeholder=" "
    />
    <label for="nickname" class="input-label">PUBG Playername</label>
  </div>
</template>
<style></style>
