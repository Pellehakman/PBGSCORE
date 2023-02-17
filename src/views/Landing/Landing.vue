<script src="./Landing.ts"></script>

<template>
  <header class="landing-heading">
    <figure>
      <img class="logo" :src="logo" alt="logo" />
    </figure>

    <div class="flex gap-4">
      <RouterLink class="landing-sign" to="/home">SIGN IN</RouterLink>
      <RouterLink class="landing-sign bg-primary" to="/home"
        >SIGN UP</RouterLink
      >
    </div>
  </header>
  <main class="landing-main">
    <div class="landing-hero-block">
      <h1 class="landing-hero-text">
        IS YOUR SQUAD <br />
        READY TO GO PRO?
      </h1>
      <p class="text-white text-m font-open">
        In this applicatiodn you can build your team and compare it against the
        top teams. Is your squad ready to go pro? You can also see detailed
        general statistics of every season you played.
      </p>
    </div>

    <div class="flex">
      <div class="relative w-full">
        <input
          type="text"
          name="playerSearch"
          class="standard-input-field rounded-r-none peer text-black"
          placeholder=" "
          value="TGLTN"
        />
        <label for="playerSearch" class="standard-input-label"
          >PLAYER NAME</label
        >
      </div>
      <button
        class="bg-success hover:brightness-125 rounded-r-sm font-bebas text-white px-8 text-2xl"
      >
        SEARCH
      </button>
    </div>
  </main>
</template>

<style>
.big-btn {
  @apply px-16 py-4 rounded-sm hover:scale-105 hover:backdrop-brightness-90 transition ease-in-out duration-300 hover:-translate-y-1;
}
.landing-heading {
  @apply flex justify-between items-center mx-16 pt-16;
}
.landing-sign {
  @apply big-btn text-white font-open font-semibold text-lg;
}
.landing-main {
  @apply mx-32 mt-32 flex flex-col justify-between gap-8 max-w-3xl;
}
.landing-hero-text {
  @apply text-8xl font-bebas text-white;
}
.landing-search-block {
  @apply flex;
}
.landing-search {
  @apply bg-success font-bebas text-3xl px-6 text-white flex-1 flex flex-col flex-grow;
}
</style>
