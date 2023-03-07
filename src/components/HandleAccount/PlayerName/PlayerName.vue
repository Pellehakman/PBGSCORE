<script src="./PlayerName" lang="ts"></script>

<template>
  <div class="input-container">
    <div class="input-icon-container">
      <font-awesome-icon
        v-if="loading"
        class="peer animate-spin icon-sm"
        icon="fa-solid fa-spinner"
      />
    </div>
    <input
      :disabled="editable"
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
