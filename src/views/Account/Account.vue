import type AppFooter from '@/components/AppFooter/AppFooter';

<script lang="ts" src="./Account.ts"></script>

<template>
  <MenuBar />
  <section class="width-max">
    <h2 class="heading-styling heading-bebas-sm">ACCOUNT SETTINGS</h2>
    <div class="flex">
      <aside class="bg-monestral w-1/2">
        <section
          class="m-2 px-2 py-3 font-bold text-white bg-slate-800 border border-white"
        >
          <h3>ACCOUNT INFORMATION</h3>
        </section>
      </aside>
      <section class="bg-blue-400 w-full p-6">
        <h2 class="heading-bebas-sm">ACCOUNT INFORMATION</h2>
        <p class="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In debitis
          neque veritatis harum minima ipsa? Repellendus, debitis dolore.
          Deserunt vitae beatae eos expedita tempora dolorem inventore hic
          quibusdam in corrupti!
        </p>
        <div class="flex flex-col gap-4">
          <div class="input-container">
            <div class="input-icon-container"></div>
            <input
              disabled
              type="PlayerName"
              id="PlayerName"
              class="input-field peer w-1/2"
              placeholder=" "
              :value="user?.phoneNumber"
            />
            <label for="PlayerName" class="input-label">PUBG Playername</label>
          </div>
          <div class="input-container">
            <div class="input-icon-container"></div>
            <input
              disabled
              type="email"
              id="email"
              class="input-field peer w-1/2"
              placeholder=" "
              :value="user?.email"
            />

            <label for="PlayerName" class="input-label">PUBG Playername</label>
          </div>

          <div class="input-container">
            <div class="input-icon-container"></div>
            <input
              disabled
              type="PlayerName"
              id="PlayerName"
              class="input-field peer w-1/2"
              placeholder=" "
              :value="user?.displayName"
            />
            <label for="PlayerName" class="input-label">PUBG Playername</label>
          </div>
        </div>
        <div class="flex justify-end">
          <button class="btn-default btn btn--primary">EDIT</button>
        </div>
      </section>
    </div>
  </section>
  <!-- <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div> -->
  <AppFooter />
</template>
