<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <ul class="menu-dropdown-container">
    <li
      @click="handleDropdownParent"
      class="menu-item-dropdown menu-item"
      :class="{ 'bg-menuSecondary': dropdownParent === true }"
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
        <li
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
            :class="{ ['rotate-180 transition-all']: dropdownChild }"
            width="16px"
            icon="fa-solid fa-chevron-down"
          />
        </li>
        <form v-if="dropdownChild" class="menu-login-form bg-MenuPrimary">
          <Email />
          <Password />

          <div class="flex flex-col items-center justify-center gap-2 mt-6">
            <button
              class="btn-all bg-success hover:brightness-12 active:brightness-75 transition-all"
            >
              <span>LOGIN</span>
            </button>
            <span class="text-xs">NO LOGIN? SIGN UP HERE</span>
          </div>
        </form>
      </ul>

      <Router-link class="menu-dropdown-item" to="/account">
        <font-awesome-icon class="pr-4" icon="fa-solid fa-gear" />
        <span>ACCOUNT SETTINGS</span>
      </Router-link>
      <li class="menu-dropdown-item">
        <font-awesome-icon
          class="pl-4 rotate-180"
          icon="fa-solid fa-right-from-bracket"
        />
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
    height: 16rem;
  }
}

.menu-nav {
  @apply text-white max-w-7xl w-full mx-auto;
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
   /* desktop */ 
  /* tablet */ lg-max:px-5 
  /* mobile */ sm-max:p-4;
}
.menu-item {
  @apply /* --------------------- */
  /* desktop */ 
  /* tablet */ 
  /* mobile */  sm-max:my-0 sm-max:mb-4
  /* general design */  my-4 flex items-center relative font-bebas text-3xl text-white hover:bg-menuSecondary transition-all cursor-pointer border border-borderColor rounded-sm;
}

.menu-item-dropdown {
  @apply /* --------------------- */
  /* mobile */ sm-max:p-4 
  /* tablet */ lg-max:px-20 
  /* desktop */ px-24 py-3
  /* general design */;
}

.menu-dropdown-container {
  @apply block relative pr-4;
}
.menu-dropdown-content {
  @apply absolute transition-all flex flex-col items-start dropdownParent-animation bg-menuPrimary w-full drop-shadow-xl;
}
.menu-dropdown-item {
  @apply /* --------------------- */
  /* mobile */ sm-max:border-0
  /* tablet */ 
  /* desktop */ border-y-0 border-borderColor
  /* general design */ items-center relative bg-menuPrimary hover:bg-menuSecondary py-3 px-4 flex w-full cursor-pointer border;
}

.dropdown:hover .dropdown-content {
  @apply transition-all flex flex-col dropdownParent-animation;
}

.menu-login-form {
  @apply /* --------------------- */
  /* desktop */ p-2 font-semibold gap-2
  /* tablet */ 
  /* mobile */ sm-max:border-0
  /* general design */ flex flex-col dropdownChild-animation h-64 w-full;
}
</style>
