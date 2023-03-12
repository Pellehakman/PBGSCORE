<script src="./Login" lang="ts"></script>

<template>
  <div class="flex justify-between">
    <span class="heading-bebas-xl"> LOGIN </span>
    <font-awesome-icon class="icon-" icon="fa-solid fa-xmark" />
  </div>

  <p class="text-m font-open">
    Welcome back, please enter your information to login and compare statistics.
  </p>
  <form class="form-container">
    <Email @onEmail="handleEmail" />
    <Password @onPassword="handlePassword" />
    <div class="form-warning">
      <span>{{ fireError }}</span>
    </div>
    <div class="form-btn-container justify-between">
      <div class="flex items-center">
        <div class="flex justify-self-start">
          <span
            >Not a member?
            <span class="font-bold text-blue-700 cursor-pointer"
              >Sign up here!</span
            ></span
          >
        </div>
      </div>
      <div class="flex">
        <button @click.prevent="cancelLogin" class="btn btn-default text-black">
          <span>CANCEL</span>
        </button>
        <button
          @click.prevent="handleLogin"
          class="btn btn-default btn--success"
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
