<script src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <img id="logo" class="logo" :src="logo" alt="" />
    </div>

    <div class="menu-container">
      <nav class="menu-nav">
        <div class="menu-nav-container">
          <ul class="flex">
            <li>
              <Router-link to="/home" class="menu-item-lg extra-border">
                <span>HOME</span>
              </Router-link>
            </li>

            <li>
              <Router-link to="/statistics" class="menu-item-lg">
                <span>STATISTICS</span>
              </Router-link>
            </li>

            <li>
              <Router-link to="/teams" class="menu-item-lg">
                <span>TEAMS</span>
              </Router-link>
            </li>
          </ul>
          <MenuLogin />
        </div>
      </nav>
    </div>
  </header>
</template>
