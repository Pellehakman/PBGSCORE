<script src="./Signup" lang="ts"></script>

<template>
  <span class="heading-bebas-xl"> SIGN UP </span>
  <p class="text-white text-m font-open">
    Enter your information to register and join other people comparing PUBG
    statistics.
  </p>

  <form class="form-container">
    <PlayerName />
    <Email />
    <Password @onPassword="handlePassword" />
    <div class="form-warning">
      <span class="text-white">WARNING</span>
    </div>

    <div class="flex justify-end pt-8">
      <button @click.prevent="cancelSignup" class="btn btn-default">
        <span>CANCEL</span>
      </button>
      <button
        @click.prevent="handleSignup"
        class="btn btn-default btn--primary"
      >
        SIGN UP

        <!-- <div class="btn-icon--r">
        <font-awesome-icon
          class="peer animate-spin text-white icon-sm"
          icon="fa-solid fa-spinner"
        />
      </div> -->
      </button>
    </div>
  </form>
  <div>{{ loading }}</div>
</template>
<style></style>
