<script src="./Email" lang="ts"></script>

<template>
  <div class="input-container">
    <input
      v-model="email"
      autofocus
      type="email"
      name="email"
      class="input-field peer"
      placeholder=" "
      @change="handleEmail(email)"
    />
    <label for="email" class="input-label">EMAIL</label>
  </div>
</template>
<style></style>
