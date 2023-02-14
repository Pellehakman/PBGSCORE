<script src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <figure>
        <img id="logo" class="logo" :src="logo" alt="" />
      </figure>
    </div>
    <div class="menu-container">
      <nav class="menu-nav">
        <ul class="menu-nav-container">
          <div class="flex">
            <Router-link class="menu-item-lg" to="/home">
              <span>HOME</span>
            </Router-link>

            <Router-link class="menu-item-lg" to="/statistics">
              <span>STATISTICS</span>
            </Router-link>

            <Router-link class="menu-item-lg" to="/teams">
              <span>TEAMS</span>
            </Router-link>
          </div>
          <div
            class="menu-account-container"
            @click="handleDropdownAccount"
            :class="{ ['active-menu']: dropdownAccount }"
          >
            <Button
              @click="showLoginForm = !showLoginForm"
              to="/account"
              class="menu-item-lg"
              >ACCOUNT</Button
            >
            <div class="menu-account-content" v-if="showLoginForm">
              <button @click="handleLoginForm" class="menu-account-item" to="#">
                LOGIN
              </button>
              <form class="bg-black py-4" v-if="loginForm">
                <label>email</label>
                <input />
                <label>password</label>
                <input />
                <button>LOGIN</button>
                <span>forgot password?</span>
                <span>No login? Sign up here</span>
              </form>
              <button v-if="hideButtons" class="menu-account-item">
                ACCOUNT SETTINGS
              </button>
              <button v-if="hideButtons" class="menu-account-item">
                LOGOUT
              </button>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>
