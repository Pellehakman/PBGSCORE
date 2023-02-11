<script src="./MenuBar.ts"></script>

<template>
  <header class="bg-blue-300">
    <div class="h-20 flex justify-center items-center">
      <figure>
        <img class="logo" :src="logo" alt="logo" />
      </figure>
    </div>
    <nav class=" border border-gray">
      <div class="bg-blue-600 flex max-w-7xl m-auto justify-between">
        <ul class="flex">
          <RouterLink class="menu-item-lg" to="/statistics">HOME</RouterLink>
          <RouterLink class="menu-item-lg" to="/statistics"
            >STATISTICS</RouterLink
          >
          <RouterLink class="menu-item-lg" to="/statistics">TEAMS</RouterLink>
        </ul>
        <ul class="flex">
          <RouterLink class="menu-item-lg" to="/statistics">ACCOUNT</RouterLink>
        </ul>
      </div>
    </nav>
  </header>
</template>
