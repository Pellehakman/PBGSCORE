<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <ul class="menu-dropdown-container">
    <li
      @click="handleDropdownParent"
      class="menu-item-dropdown"
      :class="{
        'bg-menuSecondary': dropdownParent === true,
      }"
    >
      <span>ACCOUNT</span>

      <img
        v-if="dropdownParent === false"
        class="absolute bottom-0.5 right-0.5 w-2 opacity-10"
        :src="triangle"
        alt=""
      />
    </li>
    <div class="menu-dropdown-content" v-if="dropdownParent">
      <ul class="flex flex-col w-full">
        <li @click="handleDropdownChild" class="menu-dropdown-item" to="#">
          <span>LOGIN</span>
          <font-awesome-icon
            :class="{
              ['rotate-180 transition-all']: dropdownChild,
            }"
            width="16px"
            icon="fa-solid fa-chevron-down"
          />
        </li>
        <form
          class="menu-login-form bg-MenuPrimary p-2 font-semibold gap-2"
          v-if="dropdownChild"
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
              class="btn-all bg-success hover:brightness-12 active:brightness-75 transition-all"
            >
              LOGIN
            </button>
            <span class="text-xs">NO LOGIN? SIGN UP HERE</span>
          </div>
        </form>
      </ul>

      <Router-link class="menu-dropdown-item" to="/account"
        >ACCOUNT SETTINGS</Router-link
      >

      <li class="menu-dropdown-item">
        <span>LOGOUT</span>
      </li>
    </div>
  </ul>
</template>

<style>
.dropdownParent-animation {
  animation: dropdownParent-animation ease-in-out 150ms;
}
@keyframes dropdownParent-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
.dropdownChild-animation {
  animation: dropdownChild-animation ease-in-out 150ms;
}
@keyframes dropdownChild-animation {
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
  @apply /* --------------------- */
  /* mobile */ sm-max:justify-between
  /* general design */ p-4 flex justify-center items-center max-w-7xl mx-auto;
}
.menu-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:border-0
  /* general design */ border border-borderColor border-l-0 border-r-0;
}

.menu-nav {
  @apply text-white max-w-7xl mx-auto;
}
.menu-nav-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:hidden sm-max:flex-col
  /* general design */ flex justify-between;
}

.activeMenu {
  @apply flex absolute bg-menuPrimary w-full;
}
.menu-item-size {
  @apply /* --------------------- */
  /* desktop */ px-16 py-3
  /* tablet */ lg-max:px-8 
  /* mobile */ sm-max:p-4 
  /* general design */;
}
.menu-item {
  @apply /* --------------------- */
  /* desktop */ 
  /* tablet */ 
  /* mobile */ sm-max:border-b sm-max:border-r-0
  /* general design */ flex items-center relative font-bebas text-3xl text-white  border-r border-borderColor hover:bg-menuSecondary transition-all cursor-pointer;
}

.menu-item-first {
  @apply /* --------------------- */
  /* mobile */ sm-max:border-t
  /* general design */ menu-item extra-border;
}

.menu-item-dropdown {
  @apply /*  */
  /* mobile */ sm-max:p-4 sm-max:border-b-0
  /* tablet */ lg-max:px-16 
  /* desktop */ px-24 py-3
  /* general design */
   menu-item extra-border;
}

.extra-border {
  @apply /* --------------------- */
  /* mobile */ sm-max:border-l-0 
  /* general design */ border-l border-l-borderColor;
}
.menu-dropdown-container {
  @apply block relative;
}
.menu-dropdown-content {
  @apply absolute transition-all flex flex-col items-start dropdownParent-animation bg-menuPrimary border border-b-0 border-borderColor gap-0.5 w-full drop-shadow-xl;
}
.menu-dropdown-item {
  @apply items-center justify-between relative bg-menuPrimary hover:bg-menuSecondary py-3 px-4 flex w-full cursor-pointer;
}
.dropdown:hover .dropdown-content {
  @apply transition-all flex flex-col dropdownParent-animation;
}
.menu-login-form {
  @apply flex flex-col dropdownChild-animation h-80 w-full;
}
</style>
