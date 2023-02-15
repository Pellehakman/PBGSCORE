<script src="./MenuLogin.ts"></script>

<template>
  <ul class="menu-account-container" @click="handleDropdownAccount">
    <li
      @click="showLoginForm = !showLoginForm"
      class="menu-item-lg extra-border relative px-24 cursor-pointer"
      :class="{
        'bg-red-700': dropdownAccount === true,
      }"
    >
      <span>ACCOUNT</span>

      <img
        v-if="dropdownAccount === false"
        class="absolute bottom-0.5 right-0.5 w-2"
        :src="triangle"
        alt=""
      />
    </li>
    <div class="menu-account-content" v-if="showLoginForm">
      <div class="flex flex-col w-full">
        <button
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
        </button>
        <form
          class="newbox bg-MenuPrimary p-2 font-semibold gap-2"
          v-if="loginForm"
        >
          <div class="relative">
            <label class="absolute top-2 left-2 z-10">EMAIL</label>
            <input class="input-basic-login" />
          </div>

          <div class="relative">
            <label class="absolute top-2 left-2 z-10">PASSWORD</label>
            <input class="input-basic-login" />
          </div>
          <div class="flex justify-end">
            <span>FORGOT PASSWORD?</span>
          </div>

          <div class="flex flex-col items-center justify-center gap-2 mt-6">
            <button class="btn-m bg-success">LOGIN</button>
            <span>No login? Sign up here</span>
          </div>
        </form>
      </div>

      <button class="menu-account-item">
        <span>ACCOUNT SETTINGS</span>
      </button>
      <button class="menu-account-item">
        <span>LOGOUT</span>
      </button>
    </div>
  </ul>
</template>
