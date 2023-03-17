<script lang="ts" src="./PlayerCard"></script>

<template>
  <div class="stats-container">
    <section class="open-type-container">
      <h1 class="heading-styling heading-bebas-sm">STATISTICS</h1>
      Statistics
    </section>
    <article class="card-container overflow-hidden border border-stone-400">
      <div
        @click="handlePlayerDropdown"
        class="flex z-50 bg-stone-100 items-center shadow-sm"
      >
        <figure
          class="h-12 w-12 flex justify-center items-center bg-yellow-400 font-bold"
        >
          <span class="text-white text-lg">1</span>
        </figure>
        <span class="font-bold px-2 mr-auto">TGLTN</span>
        <font-awesome-icon
          v-if="!playerDropdown"
          class="pr-4 icon-pen flex"
          icon="fa-thin fa-pen"
        />
      </div>

      <Transition class="overflow-hidden" name="playerTransition">
        <div class="bg-stone-100 p-2 shadow-lg" v-if="playerDropdown">
          <div class="input-container">
            <input
              :autofocus="true"
              id="player"
              type="text"
              name="player"
              class="input-field peer"
              placeholder=" "
            />

            <label for="player" class="input-label">PLAYER NAME</label>
            <button class="input-icon-sm z-40">
              <!-- <font-awesome-icon
                class="peer animate-spin text-white icon-md"
                icon="fa-solid fa-spinner"
              /> -->
              <font-awesome-icon
                class="peer icon-sm bg-white"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
          <div class="px-2 pt-4 pb-2 flex flex-col">
            <span class="text-sm font-bold">HISTORY</span>
            <div class="text-sm flex flex-col">
              <span>Phawkman</span>
              <span>Ekkan</span>
            </div>
          </div>
        </div>
      </Transition>
    </article>
    <article class="card-container">2</article>
    <article class="card-container">3</article>
    <article class="card-container">4</article>
  </div>
</template>

<style>
.playerTransition-leave-to,
.playerTransition-enter-from {
  transform: translateY(-100%);

  opacity: 0;
}

.playerTransition-enter-active,
.playerTransition-leave-active {
  transition: all 0.1s ease-in-out;
}
.stats-container {
  @apply /* --------------------- */
  /* full */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* general design */ flex h-full gap-2;
}
.open-type-container {
  @apply w-full bg-emerald-700 flex flex-col sm:hidden;
}
.type {
  @apply sm-max:hidden;
}

.amount {
  @apply font-bold;
}
.card-container {
  @apply w-full bg-white flex flex-col;
}
</style>
