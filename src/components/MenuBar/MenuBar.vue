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
            class="dropdown"
            @click="handleLoginActive"
            :class="{ ['active-menu']: loginActive }"
          >
            <Button
              @click="showLoginForm = !showLoginForm"
              to="/account"
              class="menu-item-lg"
              >LOGIN</Button
            >
            <div class="dropdown-content" v-if="showLoginForm">
              <div @click.stop="">
                <h3>Login</h3>
                <label>email</label>
                <input />
                <label>password</label>
                <input />
                <button>LOGIN</button>
                <span>forgot password?</span>
                <span>No login? Sign up here</span>
                <Router-link class="menu-item-lg" to="/account">
                  <span>SETTINGS</span>
                </Router-link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>
