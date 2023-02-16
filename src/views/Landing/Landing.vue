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
        In this application you can build your team and compare it against the
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
