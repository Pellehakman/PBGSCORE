<script src="./Signup" lang="ts"></script>

<template>
  <div class="flex justify-between">
    <span class="heading-bebas-xl"> SIGNUP </span>
    <font-awesome-icon
      @click.prevent="cancelSignup"
      class="icon-sm hover:scale-150 transition-all hover:bg-stone-300 p-2 rounded-full"
      icon="fa-solid fa-xmark"
    />
  </div>

  <p class="text-m font-open">
    Enter your in game playername to continue your registration
  </p>
  <div name="firstStep">
    <form v-if="!nextStep" class="form-container">
      <div class="input-field-container">
        <PlayerName @onError="handleError" @onLoading="handleLoading" />
      </div>

      <div class="form-warning">
        <div class="h-6 flex items-center">
          {{ signInError }}{{ pubgError }}
        </div>
      </div>
      <div class="flex form-btn-container">
        <button
          @click.prevent="cancelSignup"
          class="btn btn-default text-black"
        >
          <span>CANCEL</span>
        </button>
        <button
          type="button"
          :disabled="loaded"
          @click.prevent="handleNextStep"
          :class="{
            'btn btn-default btn--primary': !loaded,
            'btn btn-default btn--inactive': loaded,
          }"
        >
          <span>NEXT</span>
          <font-awesome-icon
            v-if="loading"
            class="peer animate-spin text-white icon-sm"
            icon="fa-solid fa-spinner"
          />
        </button>
      </div>
    </form>
  </div>
  <Transition name="secondStep">
    <div v-if="nextStep">
      <form class="form-container">
        <div class="input-field-container">
          <Email @onEmail="handleEmail" />
          <Password @onPassword="handlePassword" />
        </div>

        <div class="form-warning">
          <span class="h-6 flex items-center">{{ fireError }}</span>
        </div>

        <div class="form-btn-container justify-between">
          <div class="flex">
            <button
              @click.prevent="cancelSignup"
              class="btn btn-default text-black"
            >
              <span>CANCEL</span>
            </button>
            <button
              @click.prevent="handleSignup"
              class="btn btn-default btn--success"
            >
              <span>REGISTER</span>
              <font-awesome-icon
                v-if="loading"
                class="peer animate-spin text-white icon-sm"
                icon="fa-solid fa-spinner"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  </Transition>
</template>
<style>
.secondStep-enter-from,
.secondStep-leave-to,
.firstStep-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.firstStep-enter-active,
.secondStep-enter-active,
.secondStep-leave-active {
  transition: all 0.2s ease-in-out;
  filter: blur(5px);
}
</style>
