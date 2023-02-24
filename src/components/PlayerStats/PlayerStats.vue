<script lang="ts" src="./PlayerStats"></script>

<template>
  <div class="stats-container">
    <article class="open-type-container">
      <h1 class="statistics-heading heading-bebas-sm">STATISTICS</h1>
      Statistics
    </article>
    <article class="card-container">
      <span>PLAYER</span>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">1</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
      <li class="flex justify-between">
        <span class="type">Statistics</span><span class="amount">2</span>
      </li>
    </article>
    <article class="card-container">PLAYER 1</article>
    <article class="card-container">PLAYER 1</article>
    <article class="card-container">PLAYER 1</article>
  </div>
</template>

<style>
.stats-container {
  @apply /* --------------------- */
  /* desktop */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* general design */ flex h-full gap-2;
}
.open-type-container {
  @apply sm-min:hidden w-full bg-emerald-700 flex flex-col;
}
.type {
  @apply sm-max:hidden;
}

.amount {
  @apply font-bold;
}
.card-container {
  @apply w-full bg-indigo-600 p-2 flex flex-col;
}
</style>
