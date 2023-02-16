<script src="./menuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <img id="logo" class="logo" :src="logo" alt="" />
    </div>

    <div class="menu-container">
      <nav class="menu-nav">
        <div class="menu-nav-container">
          <div class="flex">
            <Router-link to="/home" class="menu-item-lg extra-border">
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
.header-logo-container {
  @apply py-4 flex justify-center items-center max-w-7xl mx-auto;
}
.menu-container {
  @apply border border-borderColor border-l-0 border-r-0;
}
.menu-nav {
  @apply text-white max-w-7xl mx-auto;
}
.menu-nav-container {
  @apply flex justify-between;
}
.nav-col-1 {
  @apply flex;
}
.nav-col-2 {
  @apply flex;
}
</style>
