<script lang="ts" src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <button @click="handleMenu" class="sm:hidden p-2">
        <font-awesome-icon width="16px" icon="fa-bars" style="color: white" />
      </button>
    </div>

    <div class="menu-container">
      <nav class="menu-nav">
        <div
          ref="menuContainer"
          :class="{ activeMenu: toggleMenu }"
          class="menu-nav-container relative"
        >
          <div class="flex sm-max:flex-col gap-4 sm-max:gap-0">
            <div class="logo-container">
              <img id="logo" class="logo" :src="logo" alt="" />
            </div>

            <Router-link to="/home" class="menu-item menu-item-size">
              <span>HOME</span>
            </Router-link>

            <Router-link to="/statistics" class="menu-item menu-item-size">
              <span>STATISTICS</span>
            </Router-link>

            <Router-link to="/teams" class="menu-item menu-item-size">
              <span>TEAMS</span>
            </Router-link>
          </div>
          <MenuLogin />
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.header-logo-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:justify-end
  /* general design */  flex justify-center items-center mx-auto relative;
}
.logo-container {
  @apply /* --------------------- */
  /* desktop */
  /* tablet */ lg-max:w-24
  /* mobile */ 
  /* general design */ relative w-32;
}

.logo {
  @apply /* --------------------- */
  /* desktop */ h-40 p-4
  /* tablet */  
  /* mobile */ sm-max:hidden
  /* general design */ absolute -top-1 z-20 bg-red-600 left-0 text-white shadow-2xl;
}

.header-container {
  @apply bg-menuPrimary px-4 sm-max:px-0;
}
</style>
