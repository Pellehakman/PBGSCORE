<script lang="ts" src="./Landing.ts"></script>

<template>
  <main class="flex flex-col">
    <header class="landing-heading">
      <img class="logo" :src="logo" alt="logo" />

      <button @click="handleModal" class="landing-sign bg-primary" to="#">
        <span>SIGN UP</span>
      </button>
    </header>
    <div class="w-screen justify-center flex pt-16">
      <div class="landing-main-container">
        <Transition class="absolute px-16" name="default-modal">
          <div v-if="defaultModal">
            <h1 class="landing-hero-text">
              IS YOUR SQUAD <br />
              READY TO GO PRO?
            </h1>
            <p class="text-white text-m font-open">
              In this applicatiodn you can build your team and compare it
              against the top teams.<br />
              Is your squad ready to go pro? You can also see detailed general
              statistics of every season you played.
            </p>

            <div class="relative flex mt-6">
              <input
                autofocus
                type="email"
                id="email"
                class="big-input-field text-black w-full peer"
                placeholder=" "
                value="TGLTN"
              />
              <label for="email" class="big-input-label">IN GAME NAME</label>
              <button
                class="bg-success btn-xl font-bebas text-3xl flex justify-center items-center text-white rounded-r-sm"
              >
                SEARCH
              </button>
            </div>
          </div>
        </Transition>
      </div>

      <Transition class="absolute px-16" name="account-modal">
        <div v-if="accountModal">
          <div class="flex justify-center items-center gap-8">
            <h1
              @click="handleClick1"
              :class="{ 'handle-hero-text': isButton1Pressed }"
              class="landing-hero-text-form"
            >
              LOGIN
            </h1>
            <h1
              @click="handleClick2"
              :class="{ 'handle-hero-text': isButton2Pressed }"
              class="landing-hero-text-form"
            >
              SIGNUP
            </h1>
          </div>

          <p class="text-white text-m font-open">
            In this applicatiodn you can build your team and compare it against
            the top teams. Is your squad ready to go pro? You can also see
            detailed general statistics of every season you played.
          </p>
        </div>
      </Transition>
    </div>
  </main>
</template>

<style>
.landing-main-container {
  @apply /* --------------------- */
  /* desktop */  
  /* tablet */ 
  /* mobile */
  /* general design */ max-w-7xl w-full relative transition-all;
}
.landing-hero-text {
  @apply /* --------------------- */
  /* desktop */ text-8xl
  /* tablet */ lg-max:text-6xl
  /* mobile */ sm-max:text-4xl 
  /* general design */ font-bebas text-white transition-all;
}
.landing-hero-text-form {
  @apply /* --------------------- */
  /* desktop */ text-4xl
  /* tablet */ lg-max:text-8xl
  /* mobile */ sm-max:text-4xl 
  /* general design */ font-bebas text-white transition-all cursor-pointer;
}
.handle-hero-text {
  @apply /* --------------------- */
  /* desktop */ text-6xl
  /* tablet */ lg-max:text-6xl
  /* mobile */ sm-max:text-6xl 
  /* general design */ font-bebas text-white transition-all cursor-pointer;
}


.big-input-field {
  @apply /* desktop */ pt-6 pb-2 pl-2
    /* tablet */
    /* mobile */
    /* general design */ flex text-sm w-full rounded-l-sm appearance-none text-white focus:outline-none focus:ring-0;
}
.big-input-label {
  @apply absolute text-base duration-150 transform -translate-y-0 peer-focus:-translate-y-0 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:scale-75  left-2 top-0 peer-focus:top-0;
}
.default-modal-enter-active,
.default-modal-leave-active {
  transition: all 0.4s ease-in-out;
}

.default-modal-enter-from,
.default-modal-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.account-modal-enter-active,
.account-modal-leave-active {
  transition: all 0.4s ease-in-out;
}

.account-modal-enter-from,
.account-modal-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.landing-out-animation {
  animation: landing-out-animation forwards ease-in-out 0.5s;
}
@keyframes landing-out-animation {
  0% {
    transform: translateX(0%);
    opacity: 100%;
  }
  100% {
    transform: translateX(100%);
    opacity: 0%;
  }
}
.landing-in-animation {
  animation: landing-in-animation ease-in-out forwards 0.5s;
}
@keyframes landing-in-animation {
  0% {
    transform: translateX(-100%);
    opacity: 0%;
  }
  100% {
    transform: translateX(0%);
    opacity: 100%;
  }
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
.landing-out {
  @apply landing-out-animation;
}
.landing-in {
  @apply landing-in-animation flex;
}
.landing-login {
  @apply mx-32 mt-32 flex-col justify-between gap-8 max-w-3xl;
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
  @apply /* ; */ absolute;
}
/* .landing-main {
  @apply mx-32 mt-32 flex flex-col justify-between gap-8 max-w-3xl;
} */

.landing-search-block {
  @apply flex;
}
.landing-search {
  @apply bg-success font-bebas text-3xl px-6 text-white flex-1 flex flex-col flex-grow;
}
</style>
