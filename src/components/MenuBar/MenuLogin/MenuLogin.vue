<script lang="ts" src="./MenuLogin.ts"></script>

<template>
  <div v-if="modalPopup" class="modal-container">
    <div class="modal1 p-12 bg-background ">
      <Transition>
        <div v-if="signinPopup" class="signin-modal-container" name="login">
          <Login />
        </div>
      </Transition>
      <Transition class="register-modal-container" name="signup">
        <div v-if="signupPopup">
          <Signup />
        </div>
      </Transition>
    </div>
  </div>

  <!-- <button
            class="btn btn-default btn--secondary"
            @click="handleSignupPopup"
          >
            Dont have an account?
          </button> -->

  <!-- <button @click="handleSigninPopup">BACK</button> -->
  <div class="menu-dropdown-container">
    <button
      @click="handleDropdownParent"
      class="menu-item menu-item-size px-16 justify-center sm-max:justify-start"
      :class="{ 'bg-menuSecondary': dropdownParent === true }"
    >
      <span class="menu-heading">ACCOUNT</span>
      <figure
        v-if="dropdownParent === false"
        class="absolute bottom-0.5 right-0.5 w-2 h-2 triangle"
      ></figure>
      <!-- <img
        v-if="dropdownParent === false"
        class="absolute bottom-0.5 right-0.5 w-2 opacity-30"
        :src="triangle"
        alt=""
      /> -->
    </button>

    <div class="menu-dropdown-content" v-if="dropdownParent">
      <div class="flex flex-col w-full">
        <button
          @click="handleModalPopup"
          class="menu-dropdown-item justify-between"
          to="#"
        >
          <div>
            <font-awesome-icon
              class="pr-4"
              icon="fa-solid fa-right-from-bracket"
            />
            <span class="font-bold">LOGIN</span>
          </div>
        </button>
      </div>

      <Router-link class="menu-dropdown-item" to="/account">
        <font-awesome-icon class="pr-4 icon-sm" icon="fa-solid fa-user-gear" />
        <span class="font-bold">ACCOUNT</span>
      </Router-link>
      <button
        @click="handleLogout"
        class="menu-dropdown-item btn--danger font-bold"
      >
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
.modal-container {
  @apply fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50;
}
.modal1 {
  @apply bg-white modal-shadow;
}
/* .register-modal-container {
  @apply;
}
 */
/* .signin-modal-container {
  @apply ;
} */
.modal-shadow {
  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.486);
}
.signin-enter-from,
.signin-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
.signin-enter-active,
.signin-leave-active {
  transition: all 0.1s ease-in-out;
}
.signup-enter-from,
.signup-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
.signup-enter-active,
.signup-leave-active {
  transition: all 0.1s ease-in-out;
}
.triangle {
  width: 200px;
  height: 200px;
  background: linear-gradient(
    to bottom right,
    #ffffff00 0%,
    #ffffff00 50%,
    rgb(0, 0, 0) 50%,
    rgb(0, 0, 0) 100%
  );
}
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
  @apply max-w-7xl w-full mx-auto;
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
  /* full */
  /* tablet */
  /* mobile */  sm-max:my-0
  /* design */  flex items-center relative font-bebas text-3xl transition-all cursor-pointer rounded-sm;
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
