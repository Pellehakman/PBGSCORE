<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <div class="menu-dropdown-container">
    <button
      @click="handleDropdownParent"
      class="menu-item menu-item-size sm:px-20 lg:px-24"
      :class="{ 'bg-menuSecondary': dropdownParent === true }"
    >
      <span class="menu-heading">ACCOUNT</span>
      <img
        v-if="dropdownParent === false"
        class="absolute bottom-0.5 right-0.5 w-2 opacity-30"
        :src="triangle"
        alt=""
      />
    </button>

    <div class="menu-dropdown-content" v-if="dropdownParent">
      <div class="flex flex-col w-full">
        <div
          @click="handleDropdownChild"
          class="menu-dropdown-item justify-between"
          to="#"
        >
          <div>
            <font-awesome-icon
              class="pr-4"
              icon="fa-solid fa-right-from-bracket"
            />
            <span>LOGIN</span>
          </div>
          <font-awesome-icon
            :class="{ ['rotate-180 transition-all icon-sm']: dropdownChild }"
            width="16px"
            icon="fa-solid fa-chevron-down"
          />
        </div>
        <form v-if="dropdownChild" class="menu-login-form bg-MenuPrimary">
          <Email />
          <Password />

          <div class="flex flex-col items-center justify-center gap-2 mt-6">
            <button class="btn btn--success">LOGIN</button>
            <span class="text-xs">NO LOGIN? SIGN UP HERE</span>
          </div>
        </form>
      </div>

      <Router-link class="menu-dropdown-item" to="/account">
        <font-awesome-icon class="pr-4 icon-sm" icon="fa-solid fa-gear" />
        <span>ACCOUNT SETTINGS</span>
      </Router-link>
      <button class="menu-dropdown-item btn--danger">
        <font-awesome-icon
          class="pl-4 rotate-180 icon-sm"
          icon="fa-solid fa-right-from-bracket"
        />
        <span>LOGOUT</span>
      </button>
    </div>
  </div>
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
    height: 16rem;
  }
}

.menu-nav {
  @apply text-white max-w-7xl w-full mx-auto;
}
.menu-nav-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:hidden sm-max:flex-col sm-max:gap-0 sm-max:items-start
  /* general design */ flex justify-between items-center gap-4;
}

.activeMenu {
  @apply flex absolute w-full;
}
.menu-item-size {
  @apply /* --------------------- */
  /* desktop */ px-16 py-3
  /* desktop */ lg-max:px-4
  /* tablet */ md-max:px-8 

  /* mobile */ sm-max:w-screen;
}
.menu-item {
  @apply /* --------------------- */
  /* desktop */ 
  /* tablet */ 
  /* mobile */  sm-max:my-0
  /* general design */ my-4 flex items-center relative font-bebas text-3xl text-white hover:bg-menuSecondary transition-all cursor-pointer rounded-sm;
}
.dropdown {
  @apply flex justify-center items-center;
}

.menu-item-dropdown {
  @apply /* --------------------- */
  /* desktop */ px-24 py-3
  /* tablet */ lg-max:px-10
  /* tablet */ md-max:px-10 
  /* mobile */ sm-max:px-4 
  /* general design */;
}

.menu-dropdown-container {
  @apply relative;
}
.menu-dropdown-content {
  @apply absolute transition-all flex flex-col items-start dropdownParent-animation bg-menuPrimary w-full drop-shadow-xl;
}
.menu-dropdown-item {
  @apply /* --------------------- */
  /* mobile */ 
  /* tablet */ 
  /* desktop */ 
  /* general design */ items-center relative bg-menuPrimary hover:bg-menuSecondary py-3 px-4 flex w-full cursor-pointer transition-all;
}

.dropdown:hover .dropdown-content {
  @apply transition-all flex flex-col dropdownParent-animation;
}

.menu-login-form {
  @apply /* --------------------- */
  /* desktop */ p-2 font-semibold gap-2
  /* tablet */ 
  /* mobile */ 
  /* general design */ flex flex-col dropdownChild-animation h-64 w-full;
}
</style>
