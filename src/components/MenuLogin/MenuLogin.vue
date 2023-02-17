<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <ul class="menu-account-container">
    <li
      @click="handleDropdownAccount"
      class="menu-item-account sm-m:px-2"
      :class="{
        'bg-menuSecondary': dropdownAccount === true,
      }"
    >
      <span>ACCOUNT</span>

      <img
        v-if="dropdownAccount === false"
        class="absolute bottom-0.5 right-0.5 w-2 opacity-10"
        :src="triangle"
        alt=""
      />
    </li>
    <div class="menu-account-content drop-shadow-xl" v-if="dropdownAccount">
      <ul class="flex flex-col w-full">
        <li
          @click="handleLoginForm"
          class="menu-account-item border-t-0 relative items-center justify-between"
          to="#"
        >
          <span>LOGIN</span>
          <font-awesome-icon
            :class="{
              ['rotate-180 transition-all']: loginForm,
            }"
            width="16px"
            icon="fa-solid fa-chevron-down"
          />
        </li>
        <form
          class="menu-login-form bg-MenuPrimary p-2 font-semibold gap-2"
          v-if="loginForm"
        >
          <div class="relative">
            <input
              autofocus
              ref="emailInput"
              type="email"
              id="email"
              class="standard-input-field bg-inputDark peer"
              placeholder=" "
            />
            <label for="email" class="standard-input-label">EMAIL ADRESS</label>
          </div>
          <div class="relative">
            <input
              type="password"
              id="password"
              class="standard-input-field bg-inputDark peer"
              placeholder=" "
            />
            <label for="password" class="standard-input-label">PASSWORD</label>
          </div>

          <div class="flex flex-col items-center justify-center gap-2 mt-6">
            <button
              class="btn bg-success hover:brightness-12 active:brightness-75 transition-all"
            >
              LOGIN
            </button>
            <span class="text-xs">NO LOGIN? SIGN UP HERE</span>
          </div>
        </form>
      </ul>

      <Router-link class="menu-account-item" to="/account"
        >ACCOUNT SETTINGS</Router-link
      >

      <li class="menu-account-item">
        <span>LOGOUT</span>
      </li>
    </div>
  </ul>
</template>

<style>
.accountDrop {
  animation: accountDrop ease-in-out 150ms;
}
@keyframes accountDrop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
.loginDrop {
  animation: loginDrop ease-in-out 150ms;
}
@keyframes loginDrop {
  from {
    opacity: 0%;
    height: 0rem;
  }
  70% {
    opacity: 0%;
  }
  to {
    opacity: 100%;
    height: 20rem;
  }
}

.header-logo-container {
  @apply p-4 flex justify-center sm-m:justify-between items-center max-w-7xl mx-auto;
}
.menu-container {
  @apply border border-borderColor border-l-0 border-r-0 sm-m:border-0;
}
.menu-nav {
  @apply text-white max-w-7xl mx-auto;
}
.menu-nav-container {
  @apply flex justify-between sm-m:hidden sm-m:flex-col;
}
.activeMenu {
  @apply flex absolute bg-menuPrimary w-full;
}
.menu-item-size {
  @apply /* mobile view */  sm-m:p-4 
  lg-m:px-8 px-16 py-3;
}
.menu-item-lg {
  @apply relative sm-m:border-b sm-m:border-r-0 font-bebas text-3xl text-white flex items-center border-r border-borderColor hover:bg-menuSecondary transition-all cursor-pointer;
}
.menu-item-home {
  @apply menu-item-lg extra-border sm-m:border-t;
}
.menu-item-account {
  @apply /* mobile view */  sm-m:p-4 
  lg-m:px-14 px-24 py-3 menu-item-lg extra-border sm-m:border-b-0;
}
.menu-account-container {
  @apply block relative;
}
.menu-account-content {
  @apply absolute transition-all flex flex-col items-start accountDrop bg-menuPrimary border border-b-0 border-borderColor gap-0.5 w-full;
}
.menu-account-item {
  @apply bg-menuPrimary hover:bg-menuSecondary border-t border-t-borderColor py-3 px-4 flex w-full cursor-pointer;
}
.dropdown:hover .dropdown-content {
  @apply transition-all flex flex-col accountDrop;
}
.extra-border {
  @apply border-l border-l-borderColor sm-m:border-l-0;
}
.menu-login-form {
  @apply flex flex-col loginDrop h-80 w-full;
}
</style>
