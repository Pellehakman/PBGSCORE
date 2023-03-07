<script lang="ts" src="./AccountInformation"></script>

<template>
  <h2 class="heading-bebas-sm">ACCOUNT INFORMATION</h2>
  <p class="mb-6">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In debitis neque
    veritatis harum minima ipsa? Repellendus, debitis dolore. Deserunt vitae
    beatae eos expedita tempora dolorem inventore hic quibusdam in corrupti!
  </p>
  <div class="flex flex-col gap-4">
    <span>current name {{ data?.pubgname }}</span>
    <PlayerName @onError="handleError" :editable="disable" class="w-3/4" />
    <Email :editable="disable" @onEmail="handleEmail" class="w-3/4" />
    <Password :editable="disable" @onPassword="handlePassword" class="w-3/4" />
    <div class="form-warning">
      <span class="text-white">{{ pubgError }} {{ fireError }}</span>
    </div>
  </div>

  <div class="flex justify-end">
    <button
      :class="[disable ? 'btn--primary' : 'btn--success']"
      class="btn-default btn"
      @click="handleUpdate"
    >
      {{ editText }}
    </button>
  </div>
</template>
