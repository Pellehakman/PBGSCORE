<script src="./Email" lang="ts"></script>

<template>
  <div class="input-container">
    <input
      :disabled="login"
      v-model="email"
      type="email"
      name="email"
      class="input-field peer"
      :class="{
        '': props.editStyle === true,
      }"
      placeholder=" "
      @change="handleEmail(email)"
    />
    <label for="email" class="input-label">EMAIL</label>
  </div>
</template>
<style></style>
