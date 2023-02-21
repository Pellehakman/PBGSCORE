<script src="./Login" lang="ts"></script>

<template>
  <span class="bebas-xl"> LOGIN </span>
  <p class="text-white text-m font-open">
    Welcome back, please enter your information to login and compare statistics.
  </p>
  <form class="gap-2 flex flex-col mt-6">
    <Email />
    <Password />
    <div class="flex justify-end">
      <span class="font-bold text-white">FORGOT PASSWORD?</span>
    </div>
    <div class="flex justify-end pt-8">
      <button @click.prevent="props.handleModal" class="btn-all">
        <span>CANCEL</span>
      </button>
      <Router-link to="statistics" class="btn-all bg-success"
        >LOGIN
      </Router-link>
    </div>
  </form>
</template>
<style></style>
