<!-- <script src="./MenuBar.ts"></script>

<template>
  <header class="bg-black">
    <div class="h-20 flex justify-center items-center">
      <figure>
        <img class="logo" :src="logo" alt="logo" />
      </figure>
    </div>
    <nav class="border border-x-transparent border-stone-900">
      <div class="bg-black flex max-w-7xl m-auto justify-between">
        <ul class="flex">
          <RouterLink class="menu-item-lg border-l" to="/statistics">
            HOME
          </RouterLink>
          <RouterLink class="menu-item-lg" to="/statistics">
            STATISTICS
            <img class="absolute bottom-0.5 right-0.5" :src="triangle" alt="" />
          </RouterLink>
          <RouterLink class="menu-item-lg" to="/statistics">
            TEAMS
            <img class="absolute bottom-0.5 right-0.5" :src="triangle" alt="" />
          </RouterLink>
        </ul>
        <ul class="flex">
          <RouterLink class="menu-item-lg border-l" to="/statistics">
            ACCOUNT
            <img class="absolute bottom-0.5 right-0.5" :src="triangle" alt="" />
          </RouterLink>
        </ul>
      </div>
    </nav>
  </header>
</template> -->

<img
        v-if="dropdownAccount === false"
        class="absolute bottom-0.5 right-0.5 w-2"
        :src="triangle"
        alt=""
      />