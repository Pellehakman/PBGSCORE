import Nickname from '@/components/HandleAccount/Nickname/Nickname';

<script src="./GoPro" lang="ts"></script>

<template>
  <h1 class="heading-bebas-xl">
    IS YOUR SQUAD <br />
    READY TO GO PRO?
  </h1>
  <p class="text-white text-m font-open">
    In this applicatiodn you can build your team and compare it against the top
    teams.<br />
    Is your squad ready to go pro? You can also see detailed general statistics
    of every season you played.
  </p>
  <div class="flex mt-6">
    <Nickname class="flex w-full rounded-r-none" />
    <button class="btn btn-default btn--success rounded-l-none">
      SEARCH
      <!-- <div class="btn-icon--r">
        <font-awesome-icon
          class="peer animate-spin text-white icon-sm"
          icon="fa-solid fa-spinner"
        />
      </div> -->
    </button>
  </div>

  <Router-link to="/statistics" class="flex justify-end text-white pt-8">
    continue without signing in
  </Router-link>
</template>
<style></style>
