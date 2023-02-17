<script src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <img id="logo" class="logo" :src="logo" alt="" />

      <button @click="handleMenu" class="xl:hidden lg:hidden sm:hidden p-2">
        <font-awesome-icon width="16px" icon="fa-bars" style="color: white" />
      </button>
    </div>

    <div class="menu-container">
      <nav class="menu-nav">
        <div :class="{ activeMenu: toggleMenu }" class="menu-nav-container">
          <div class="flex sm-m:flex-col">
            <Router-link to="/home" class="menu-item-home">
              <span>HOME</span>
            </Router-link>

            <Router-link to="/statistics" class="menu-item-lg">
              <span>STATISTICS</span>
            </Router-link>

            <Router-link to="/teams" class="menu-item-lg">
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
.logo {
  @apply w-16;
}
.header-container {
  @apply bg-menuPrimary;
}
</style>
