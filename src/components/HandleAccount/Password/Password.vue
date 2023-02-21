<script src="./Password" lang="ts"></script>

<template>
  <div class="relative">
    <div class="icons">
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.yes"
        @click="handleDisplayPassword"
        class="standard-input-show peer"
        :class="{ hidden: password.length < 1 }"
        icon="fa-solid fa-eye-slash"
      />
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.no"
        @click="handleDisplayPassword"
        class="standard-input-show peer"
        icon="fa-solid fa-eye"
      />
    </div>

    <input
      v-model="password"
      :type="displayPassword"
      id="password"
      class="standard-input-field peer"
      placeholder=" "
    />
    <label for="password" class="standard-input-label">PASSWORD</label>
  </div>
</template>
<style></style>
