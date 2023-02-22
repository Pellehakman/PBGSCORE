<script src="./Password" lang="ts"></script>

<template>
  <div class="relative">
    <div class="input-icon-container">
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.yes"
        @click="handleDisplayPassword"
        class="input-icon peer"
        :class="{ hidden: password.length < 1 }"
        icon="fa-solid fa-eye-slash"
      />
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.no"
        @click="handleDisplayPassword"
        class="input-icon peer"
        icon="fa-solid fa-eye"
      />
    </div>

    <input
      v-model="password"
      :type="displayPassword"
      id="password"
      class="input-field peer"
      placeholder=" "
    />
    <label for="password" class="input-label">Password</label>
  </div>
</template>
<style></style>
