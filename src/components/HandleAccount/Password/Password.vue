<script src="./Password" lang="ts"></script>

<template>
  <div class="input-container">
    <div class="input-icon">
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.yes"
        @click="handleDisplayPassword"
        class="icon-sm peer text-black"
        :class="{ hidden: password.length < 1 }"
        icon="fa-solid fa-eye-slash"
      />
      <font-awesome-icon
        v-if="displayPassword === showEyeIcon.no"
        @click="handleDisplayPassword"
        class="icon-sm text-black peer"
        icon="fa-solid fa-eye"
      />
    </div>

    <input
      :disabled="login"
      v-model="password"
      :type="displayPassword"
      name="password"
      class="input-field peer"
      :class="{
        '': props.editStyle === true,
      }"
      placeholder=" "
      autocomplete="on"
      @change="handlePassword(password)"
    />
    <label for="password" class="input-label">{{ placeholderPassword }}</label>
  </div>
</template>
<style></style>
