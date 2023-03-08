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
        v-if="loadingGood"
        class="peer icon-sm text-white"
        icon="fa-solid fa-check-circle"
      />
      <font-awesome-icon
        v-if="loadingBad"
        class="peer icon-sm text-white"
        icon="fa-solid fa-exclamation-circle"
      />
    </div>
    <input
      :disabled="edit"
      v-model="playerName"
      type="playerName"
      id="playerName"
      class="input-field peer"
      :class="{
        'bg-black animate-pulse': props.editStyle === true,
      }"
      placeholder=" "
      @change="handlePlayerName(playerName)"
    />
    <label for="playerName" class="input-label">PUBG Playername</label>
  </div>
</template>
<style></style>
