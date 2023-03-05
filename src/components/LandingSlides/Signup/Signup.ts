import Email from "@/components/HandleAccount/Email/Email.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";
import $pubgService from "@/services/pubgService";

export default defineComponent({
  components: { Password, Email, PlayerName },
  name: "signup",
  emits: ["onCancelSignup"],

  setup(props, { emit }) {
    const loading = ref(false);

    const handleSignup = async () => {
      loading.value = true;
      await $firebaseService.RegisterSubmit(
        email.value,
        password.value,
        $pubgService
      );
      fireError.value = $firebaseService.isError;
      loading.value = false;
    };

    const pubgError = ref("");
    const fireError = ref<any>("");
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
