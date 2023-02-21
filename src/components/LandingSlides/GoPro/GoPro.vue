<script src="./GoPro" lang="ts"></script>

<template>
  <h1 class="bebas-xl">
    IS YOUR SQUAD <br />
    READY TO GO PRO?
  </h1>
  <p class="text-white text-m font-open">
    In this applicatiodn you can build your team and compare it against the top
    teams.<br />
    Is your squad ready to go pro? You can also see detailed general statistics
    of every season you played.
  </p>

  <div class="relative flex mt-6 shadow-sm">
    <input
      autofocus
      type="email"
      id="email"
      class="big-input-field text-black w-full peer"
      placeholder=" "
      value="TGLTN"
    />
    <label for="email" class="big-input-label">IN GAME NAME</label>
    <button class="landing-search-btn">SEARCH</button>
  </div>
  <Router-link to="/statistics" class="flex justify-end text-white pt-16">
    continue without signing in
  </Router-link>
</template>
<style></style>
