<script src="./PlayerName" lang="ts"></script>

<template>
  <div class="input-container">
   
    <div class="input-icon-container">
      <font-awesome-icon
        class="peer animate-spin icon-sm"
        icon="fa-solid fa-spinner"
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
      v-model="playerName"
      type="playerName"
      id="playerName"
      class="input-field peer"
      placeholder=" "
      @change="handlePlayerName(playerName)"
    />
    <label for="playerName" class="input-label">PUBG Playername</label>
  </div>
</template>
<style></style>
