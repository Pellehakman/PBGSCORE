<script src="./Login" lang="ts"></script>

<template>
  <div class="flex justify-between">
    <span class="heading-bebas-xl"> LOGIN </span>
    <font-awesome-icon
      @click.prevent="cancelLogin"
      class="icon-sm hover:scale-150 transition-all hover:bg-stone-300 p-2 rounded-full"
      icon="fa-solid fa-xmark"
    />
  </div>

  <p class="text-m font-open">
    Welcome back, please enter your information to login and compare statistics.
  </p>
  <form class="form-container">
    <div class="input-field-container">
      <Email @onEmail="handleEmail" />
      <Password @onPassword="handlePassword" />
    </div>

    <div class="form-warning">
      <div class="h-6 flex items-center">{{ fireError }}</div>
    </div>

    <div class="form-btn-container justify-between">
      <div class="flex items-center">
        <div class="flex justify-self-start">
          <span
            v-if="!login"
            @click.prevent="enterSignup"
            class="font-bold text-sky-600 cursor-pointer"
            >SIGN UP HERE!
          </span>
        </div>
      </div>
      <div class="flex">
        <button @click.prevent="cancelLogin" class="btn btn-default text-black">
          <span>CANCEL</span>
        </button>
        <button
          v-if="login"
          @click.prevent="handleLogout"
          class="btn btn-default btn--danger"
        >
          LOG OUT
        </button>
        <button
          v-if="!login"
          type="button"
          :disabled="loaded"
          @click.prevent="handleLogin"
          :class="{
            'btn btn-default btn--success': !loaded,
            'btn btn-default btn--inactive': loaded,
          }"
        >
          LOGIN
          <font-awesome-icon
            v-if="loading"
            class="peer animate-spin text-white icon-sm"
            icon="fa-solid fa-spinner"
          />
        </button>
      </div>
    </div>
  </form>
</template>
<style></style>
