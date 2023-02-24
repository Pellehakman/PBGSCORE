<script lang="ts" src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <img id="logo" class="header-logo" :src="logo" alt="brand logo" />
      <button @click="handleMenu" class="burger-icon">
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
          <div class="menu-item-container">
            <div class="menu-logo-container">
              <img id="logo" class="menu-logo" :src="logo" alt="" />
            </div>

            <Router-link to="/home" class="menu-item menu-item-size">
              <span class="menu-heading">HOME</span>
            </Router-link>

            <Router-link to="/statistics" class="menu-item menu-item-size">
              <span class="menu-heading">STATISTICS</span>
            </Router-link>

            <Router-link to="/teams" class="menu-item menu-item-size">
              <span class="menu-heading">TEAMS</span>
            </Router-link>
          </div>
          <MenuLogin />
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
.burger-icon {
  @apply sm-min:hidden p-4;
}
.header-container {
  @apply bg-menuPrimary px-4 sm-max:px-0 mb-10 sm-max:mb-0;
}
.menu-heading {
  @apply text-3xl lg-max:text-2xl;
}
.menu-logo-container {
  @apply bg-danger-600 flex items-center justify-center w-24 sm-max:hidden;
}
.menu-logo {
  @apply h-8;
}
.header-logo {
  @apply w-24 p-4 flex items-center sm-min:hidden;
}
.header-logo-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:justify-between
  /* general design */  flex justify-center items-center mx-auto relative ;
}
.logo-container {
  @apply /* --------------------- */
  /* desktop */
  /* tablet */ lg-max:w-24
  /* mobile */ md-max:hidden sm-max:hidden
  /* general design */ relative w-32;
}

.logo {
  @apply /* --------------------- */
  /* desktop */ h-40 p-4
  /* tablet */  
  /* mobile */ sm-max:hidden
  /* general design */ absolute -top-1 z-20 bg-red-600 left-0 text-white shadow-2xl;
}
.menu-item-container {
  @apply flex w-screen sm-max:flex-col gap-4 sm-max:gap-0;
}
</style>
