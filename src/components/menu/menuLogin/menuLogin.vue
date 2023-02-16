<script src="./menuLogin.ts"></script>

<template>
  <ul class="menu-account-container">
    <li
      @click="handleDropdownAccount"
      class="menu-item-lg extra-border relative px-24 cursor-pointer"
      :class="{
        'bg-menuSecondary': dropdownAccount === true,
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
    <div class="menu-account-content" v-if="dropdownAccount">
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
          class="newbox bg-MenuPrimary p-2 font-semibold gap-2"
          v-if="loginForm"
        >
          <div class="relative">
            <input
              type="email"
              name="email"
              class="standard-input-field bg-inputDark peer"
              placeholder=" "
            />
            <label for="email" class="standard-input-label">EMAIL ADRESS</label>
          </div>
          <div class="relative">
            <input
              type="password"
              name="email"
              class="standard-input-field bg-inputDark peer"
              placeholder=" "
            />
            <label for="email" class="standard-input-label">PASSWORD</label>
          </div>

          <!-- <div class="flex justify-end">
            <span class="text-xs">FORGOT PASSWORD?</span>
          </div> -->

          <div class="flex flex-col items-center justify-center gap-2 mt-6">
            <button
              class="btn-m bg-success hover:brightness-125 active:brightness-75 transition-all"
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
