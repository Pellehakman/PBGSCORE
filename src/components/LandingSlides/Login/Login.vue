<script src="./Login" lang="ts"></script>

<template>
  <span class="bebas-xl"> LOGIN </span>
  <p class="text-white text-m font-open">
    Welcome back, please enter your information to login and compare statistics.
  </p>
  <form class="form-container">
    <Email />

    <Password />
    <div class="form-warning">
      <span class="text-white">WARNING</span>
    </div>
    <div class="form-btn-container">
      <button @click.prevent="props.handleModal" class="btn">
        <span>CANCEL</span>
      </button>
      <Router-link to="statistics" class="btn btn--success">LOGIN</Router-link>
    </div>
  </form>
</template>
<style></style>
