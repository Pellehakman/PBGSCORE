<script src="./Signup" lang="ts"></script>

<template>
  <span class="heading-bebas-xl"> SIGN UP </span>
  <p class="text-white text-m font-open">
    Enter your information to register and join other people comparing PUBG
    statistics.
  </p>
  <form class="form-container">
    <Nickname />
    <Email />
    <Password />
    <div class="form-warning">
      <span class="text-white">WARNING</span>
    </div>

    <div class="flex justify-end pt-8">
      <button @click.prevent="props.handleModal" class="btn btn-default">
        <span>CANCEL</span>
      </button>
      <Router-link to="statistics" class="btn btn-default btn--primary"
        >SIGN UP
      </Router-link>
    </div>
  </form>
</template>
<style></style>
