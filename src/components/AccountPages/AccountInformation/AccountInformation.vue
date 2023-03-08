<script lang="ts" src="./AccountInformation"></script>

<template>
  <h2 class="heading-bebas-sm">ACCOUNT INFORMATION</h2>
  <p class="mb-6">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In debitis neque
    veritatis harum minima ipsa? Repellendus, debitis dolore. Deserunt vitae
    beatae eos expedita tempora dolorem inventore hic quibusdam in corrupti!
  </p>
  <div class="flex flex-col gap-4">
    <PlayerName
      @onError="handleError"
      :edit="edit"
      :editStyle="editStyle"
      class="w-3/4"
    />
    <Email
      @onEmail="handleEmail"
      :edit="edit"
      :editStyle="editStyle"
      class="w-3/4"
    />
    <Password
      @onPassword="handlePassword"
      :edit="edit"
      :editStyle="editStyle"
      class="w-3/4"
    />
    <div class="form-warning">
      <span class="text-white">{{ pubgError }} {{ fireError }}</span>
    </div>
  </div>

  <div class="flex justify-end">
    <button
      @click="handleUpdateCancel"
      :class="[edit ? 'hidden' : '']"
      class="btn-default btn"
    >
      CANCEL
    </button>
    <button
      :class="[edit ? 'btn--primary' : 'btn--success']"
      class="btn-default btn"
      @click="handleUpdate"
    >
      {{ editText }}
    </button>
  </div>
</template>
