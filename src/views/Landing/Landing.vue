import Email from '@/components/HandleLogin/Email/Email'; import Nickname from
'@/components/HandleLogin/Nickname/Nickname';

<script lang="ts" src="./Landing.ts"></script>

<template>
  <div class="flex flex-col">
    <header class="landing-heading">
      <div class="flex">
        <img class="logo" :src="logo" alt="logo" />
      </div>
      <div class="flex gap-2">
        <button
          @click="handleLogin"
          :class="{ 'bg-primary': loginModal === true }"
          class="btn-all"
        >
          <span>LOGIN</span>
        </button>
        <button
          @click="handleSignup"
          :class="{ 'bg-primary': signupModal === true }"
          class="btn-all"
        >
          <span>SIGN UP</span>
        </button>
      </div>
    </header>

    <main class="modal-container">
      <div class="landing-main-container">
        <Transition class="absolute px-16" name="default-modal">
          <div v-if="firstModal">
            <GoPro />
          </div>
        </Transition>
      </div>

      <Transition class="absolute px-16 " name="login-modal">
        <div v-if="loginModal" class="max-w-2xl w-screen">
          <Login :handleModal="handleModal" />
        </div>
      </Transition>

      <Transition class="absolute px-16" name="signup-modal">
        <div v-if="signupModal" class="max-w-2xl w-screen">
          <Signup :handleModal="handleModal" />
        </div>
      </Transition>
    </main>
  </div>
</template>

<style>
.modal-container {
  @apply /* --------------------- */
  /* desktop */  pt-32
  /* tablet */ lg-max:pt-24
  /* mobile */sm-max:pt-16
  /* general design */ w-screen justify-center flex ;
}
.landing-main-container {
  @apply /* --------------------- */
  /* desktop */  
  /* tablet */ 
  /* mobile */
  /* general design */ max-w-7xl w-full relative transition-all;
}
.landing-hero-text {
  @apply /* --------------------- */
  /* desktop */ text-8xl
  /* tablet */ lg-max:text-6xl
  /* mobile */ sm-max:text-4xl 
  /* general design */ font-bebas text-white transition-all cursor-pointer;
}
.landing-hero-small {
  @apply /* --------------------- */
  /* desktop */ text-8xl
  /* tablet */ lg-max:text-4xl
  /* mobile */ sm-max:text-3xl 
  /* general design */ font-bebas text-white transition-all cursor-pointer;
}

.big-input-field {
  @apply /* desktop */ pt-6 pb-2 pl-2
    /* tablet */
    /* mobile */
    /* general design */ flex text-sm w-full rounded-l-sm appearance-none text-white focus:outline-none focus:ring-0;
}
.big-input-label {
  @apply absolute text-base duration-150 transform -translate-y-0 peer-focus:-translate-y-0 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:scale-75  left-2 top-0 peer-focus:top-0;
}

.default-modal-enter-from,
.default-modal-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.signup-modal-leave-to,
.signup-modal-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.login-modal-leave-to,
.login-modal-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.signup-modal-enter-active,
.signup-modal-leave-active,
.login-modal-enter-active,
.login-modal-leave-active,
.default-modal-enter-active,
.default-modal-leave-active {
  transition: all 0.2s ease-in-out;
}

.landing-login {
  @apply mx-32 mt-32 flex-col justify-between gap-8 max-w-3xl;
}
.big-btn {
  @apply px-16 py-4 rounded-sm hover:scale-105 hover:backdrop-brightness-90 transition ease-in-out duration-300 hover:-translate-y-1;
}
.landing-heading {
  @apply flex justify-between  mx-16 pt-16;
}
.landing-sign {
  @apply big-btn text-white font-open font-semibold text-lg;
}
.landing-search-block {
  @apply flex;
}
.landing-search {
  @apply bg-success font-bebas text-3xl px-6 text-white flex-1 flex flex-col flex-grow;
}
</style>
