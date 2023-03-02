<script src="./PlayerName" lang="ts"></script>

<template>
  <div class="input-container">
    <div class="input-icon-container">
      <font-awesome-icon
        v-if="loading"
        class="peer animate-spin icon-sm"
        icon="fa-solid fa-spinner"
      />
      <font-awesome-icon
        v-if="warning"
        class="standard-input-show peer text-red-500"
        icon="fa-solid fa-circle-exclamation"
      />
      <font-awesome-icon
        v-if="success"
        class="standard-input-show peer text-green-500"
        icon="fa-solid fa-circle-check"
      />
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
