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

    <div class="flex relative">
      <input
        type="text"
        name="username"
        placeholder="Enter your in game player name"
        class="block w-full font-open appearance-none focus:outline-none py-4 pl-2"
      />

      <button @click="redirect()" class="landing-search big-btn">SEARCH</button>
    </div>
  </main>
</template>
