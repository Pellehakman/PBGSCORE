<script src="./Login" lang="ts"></script>

<template>
  <span class="heading-bebas-xl"> LOGIN </span>
  <p class="text-white text-m font-open">
    Welcome back, please enter your information to login and compare statistics.
  </p>
  <form class="form-container">
    <Email :v-model="email" />
    <Password />
    <div class="form-warning">
      <span class="text-white">WARNING</span>
    </div>
    <div class="form-btn-container">
      <button @click.prevent="props.handleModal" class="btn btn-default">
        <span>CANCEL</span>
      </button>
      <button @click.prevent="handleLogin" class="btn btn-default btn--success">
        LOGIN
      </button>
    </div>
  </form>
</template>
<style></style>
