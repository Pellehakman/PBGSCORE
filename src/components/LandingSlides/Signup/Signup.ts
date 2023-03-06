import Email from "@/components/HandleAccount/Email/Email.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $fireAccount from "@/services/account/fireAccount";
import { defineComponent, ref } from "vue";
import $apiAccount from "@/services/account/apiAccount";
import $fireUser from "@/services/account/fireUser";

export default defineComponent({
  components: { Password, Email, PlayerName },
  name: "signup",
  emits: ["onCancelSignup"],

  setup(props, { emit }) {
    const loading = ref(false);

    const handleSignup = async () => {
      fireError.value = "";
      pubgError.value = "";
      loading.value = true;
      await $fireAccount.RegisterSubmit(
        email.value,
        password.value,
        $apiAccount
      );

      fireError.value = $fireAccount.Error;
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

    const cancelSignup = () => {
      emit("onCancelSignup");
    };

    return {
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
