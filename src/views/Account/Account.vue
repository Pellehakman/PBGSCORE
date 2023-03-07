import type AppFooter from '@/components/AppFooter/AppFooter';

<script lang="ts" src="./Account.ts"></script>

<template>
  <MenuBar />
  <section class="width-max">
    <h2 class="heading-styling heading-bebas-sm">ACCOUNT SETTINGS</h2>
    <div class="flex">
      <aside class="bg-monestral w-1/2 flex flex-col p-2 gap-2">
        <button
          class="px-2 py-3 font-bold text-white flex w-full bg-slate-800 border border-white"
          @click="toggleTab(1)"
        >
          ACCOUNT INFORMATION
        </button>
        <button
          class="px-2 py-3 font-bold text-white flex w-full bg-slate-800 border border-white"
          @click="toggleTab(2)"
        >
          SETTINGS
        </button>
        <button
          class="px-2 py-3 font-bold text-white flex w-full bg-slate-800 border border-white"
          @click="toggleTab(3)"
        >
          LOGIN
        </button>
        <button
          class="px-2 py-3 font-bold text-white flex w-full bg-slate-800 border border-white"
          @click="toggleTab(4)"
        >
          SIGN IN
        </button>
      </aside>
      <section class="flex flex-col bg-orange-400 w-full p-6">
        <div :class="[toggleState === 1 ? 'active-tab' : 'hidden']">
          <AccountInformation />
        </div>
        <div :class="[toggleState === 2 ? 'active-tab' : 'hidden']">
          <h1>shit in my face</h1>
        </div>
      </section>
    </div>
  </section>
  <!-- <Transition
    class="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 px-20 py-4 bg-black"
    v-if="!disable"
    name="login-modal"
  >
    <div class="">
      <Login @onCancelLogin="handleModal" />
    </div>
  </Transition> -->
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
