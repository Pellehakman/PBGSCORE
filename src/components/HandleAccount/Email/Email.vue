<script src="./Email" lang="ts"></script>

<template>
  <div class="input-container">
    <input
      v-model="email"
      :disabled="true"
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
