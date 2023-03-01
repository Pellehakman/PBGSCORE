import Email from "@/components/HandleAccount/Email/Email.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Password, Email, PlayerName },
  name: "signup",
  emits: ["onCancelSignup"],

  setup(props, { emit }) {
    async function handleSignup() {
      $firebaseService.RegisterSubmit(password.value, email.value);
    }

    const displayName = ref("");
    const handlePlayerName = (fromPlayerName: string) => {
      displayName.value = fromPlayerName;
    };

    const email = ref("");
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
    };

    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      password.value = fromPassword;
    };

    const cancelSignup = () => {
      emit("onCancelSignup");
    };

    return {
      handleSignup,
      handlePassword,
      handleEmail,
      cancelSignup,
      handlePlayerName,
    };
  },
});
