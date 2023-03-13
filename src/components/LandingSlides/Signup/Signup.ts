import Email from "@/components/HandleAccount/Email/Email.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $fireAccount from "@/services/account/fireAccount";
import { defineComponent, ref } from "vue";
import $apiAccount from "@/services/account/apiAccount";

export default defineComponent({
  components: { Password, Email, PlayerName },
  name: "signup",
  emits: ["onCancelSignup"],

  setup(props, { emit }) {
    const loading = ref(false);
    const signInError = ref("");
    const handleSignup = async () => {
      fireError.value = "";
      pubgError.value = "";
      loading.value = true;
      if ($apiAccount.fetchPlayer === undefined) {
        signInError.value = "Please search for player";
      } else if (email.value.length <= 0) {
        signInError.value = "Please enter email";
      } else if (password.value.length <= 0) {
        signInError.value = "Please enter password";
      } else {
        await $fireAccount.RegisterSubmit(
          email.value,
          password.value,
          $apiAccount
        );
      }
      if ($fireAccount.Error) {
        fireError.value = $fireAccount.Error;
      }
      loading.value = false;
    };

    const pubgError = ref("");
    const fireError = ref<string | undefined>("");
    const handleError = (fromError: string) => {
      pubgError.value = fromError;
    };

    const email = ref("");
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
    };
    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      console.log(fromPassword);
      password.value = fromPassword;
    };
    const nextStep = ref(false);
    const handleNextStep = () => {
      nextStep.value = true;
    };
    const cancelSignup = () => {
      emit("onCancelSignup");
    };

    return {
      handleNextStep,
      nextStep,
      signInError,
      pubgError,
      fireError,
      loading,
      handleSignup,
      handleError,
      handlePassword,
      handleEmail,
      cancelSignup,
    };
  },
});
