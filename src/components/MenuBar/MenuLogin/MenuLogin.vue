<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <div class="menu-dropdown-container">
    <button
      @click="handleDropdownParent"
      class="menu-item menu-item-size px-16 justify-center sm-max:justify-start"
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
        <button
          @click="handleDropdownChild"
          class="menu-dropdown-item justify-between"
          to="#"
        >
          <div>
            <font-awesome-icon
              class="pr-4"
              icon="fa-solid fa-right-from-bracket"
            />
            <Router-link to="account">LOGIN</Router-link>
          </div>
          <!-- <font-awesome-icon
            :class="{ ['rotate-180 transition-all icon-sm']: dropdownChild }"
            width="16px"
            icon="fa-solid fa-chevron-down"
          /> -->
        </button>
        <!-- <form v-if="dropdownChild" class="menu-form bg-MenuPrimary">
         <Email />
          <Password />

          <div class="menu-form-btn-container">
            <button class="btn btn-default btn--success">LOGIN</button>
            <span class="text-xs">NO LOGIN? SIGN UP HERE</span>
          </div>
        </form> -->
      </div>

      <Router-link class="menu-dropdown-item" to="/account">
        <font-awesome-icon class="pr-4 icon-sm" icon="fa-solid fa-user-gear" />
        <span>ACCOUNT</span>
      </Router-link>
      <button @click="handleLogout" class="menu-dropdown-item btn--danger">
        <font-awesome-icon
          class="pl-4 rotate-180 icon-sm"
          icon="fa-solid fa-right-from-bracket"
        />
        LOGOUT
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
  /* design */ flex justify-between items-center gap-4;
}

.activeMenu {
  @apply flex absolute w-full;
}
.menu-item-size {
  @apply /* --------------------- */
  /* full */px-16 py-3
  /* laptop */ lg-max:px-8
  /* tablet */ md-max:px-2 
  /* mobile */ sm-max:w-full;
  /* design */
}
.btn-default {
  @apply /* --------------------- */
  /* full */ px-12 py-2 font-bold
  /* laptop */ lg-max:px-8 text-xl
  /* tablet */ md-max:px-3 md-max:text-base
  /* mobile */ sm-max:py-4 sm-max:px-8 sm-max:text-base
  /* design */;
}
.menu-item {
  @apply /* --------------------- */
  /* full */ my-4
  /* tablet */
  /* mobile */  sm-max:my-0 
  /* design */  flex items-center relative font-bebas text-3xl text-white hover:bg-menuSecondary transition-all cursor-pointer rounded-sm;
}
.dropdown {
  @apply flex justify-center items-center;
}

.menu-item-dropdown {
  @apply /* --------------------- */
  /* full */ px-24 py-3
  /* tablet */ lg-max:px-10
  /* tablet */ md-max:px-10
  /* mobile */ sm-max:px-4
  /* design */;
}

.menu-dropdown-container {
  @apply relative sm-max:w-full;
}
.menu-dropdown-content {
  @apply flex flex-col items-start absolute transition-all dropdownParent-animation bg-menuPrimary w-full drop-shadow-xl;
}
.menu-dropdown-item {
  @apply /* --------------------- */
  /* full */ py-3 px-4 w-full
  /* tablet */
  /* mobile */
  /* design */ flex items-center relative bg-menuPrimary hover:bg-menuSecondary cursor-pointer transition-all;
}

.dropdown:hover .dropdown-content {
  @apply transition-all flex flex-col dropdownParent-animation;
}

.menu-form {
  @apply /* --------------------- */
  /* full */ p-2 gap-2 h-64 w-full
  /* tablet */
  /* mobile */
  /* design */ flex flex-col font-semibold dropdownChild-animation;
}
.menu-form-btn-container {
  @apply flex flex-col items-center justify-center gap-2 mt-6;
}
</style>
