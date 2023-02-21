<script lang="ts" src="./Landing.ts"></script>

<template>
  <div class="h-screen w-screen overflow-hidden">
    <header class="landing-heading">
      <figure>
        <img class="logo" :src="logo" alt="logo" />
      </figure>







      
<div class="flex justify-between gap-8 h-24">
            <span
              @click="handleClick1"
              :class="{
                'text-8xl lg-max:text-6xl ': isButton1Pressed,
              }"
              class="landing-hero-small"
            >
              SIGN UP
            </span>
            <h1
              @click="handleClick2"
              :class="{
                'text-8xl lg-max:text-6xl  ': isButton2Pressed,
              }"
              class="landing-hero-small"
            >
              LOGIN
            </h1>
          </div>

















      <ul class="flex gap-4">
        <li @click="handleView" class="landing-sign" to="#">SIGN IN</li>
        <li @click="handleView" class="landing-sign bg-primary" to="#">
          SIGN UP
        </li>
      </ul>
    </header>
    <main class="landing-main" :class="[isActive ? outA : inA]">
      <div class="landing-hero-block">
        <h1 class="landing-hero-text">
          IS YOUR SQUAD <br />
          READY TO GO PRO?
        </h1>
        <p class="text-white text-m font-open">
          In this applicatiodn you can build your team and compare it against
          the top teams. Is your squad ready to go pro? You can also see
          detailed general statistics of every season you played.
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
    <div class="landing-main" :class="[isActive ? inA : 'hidden']">
      <main>
        <div class="landing-hero-block">
          <h1 class="landing-hero-text">
            IS YOUR SQUAD <br />
            READY TO GO PRO?
          </h1>
          <p class="text-white text-m font-open">
            In this applicatiodn you can build your team and compare it against
            the top teams. Is your squad ready to go pro? You can also see
            detailed general statistics of every season you played.
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
      <button @click="handleView" class="landing-sign" to="#">BACK</button>
    </div>
  </div>
</template>

<style>
.landing-out-animation {
  animation: landing-out-animation ease-in-out forwards 450ms;
}
@keyframes landing-out-animation {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
.landing-in-animation {
  animation: landing-in-animation ease-in-out forwards 450ms;
}
@keyframes landing-in-animation {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

.landing-out {
  @apply landing-out-animation;
}
.landing-in {
  @apply landing-in-animation hidden;
}
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
