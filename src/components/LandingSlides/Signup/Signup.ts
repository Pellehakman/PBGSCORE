import Email from "@/components/HandleAccount/Email/Email.vue";
import PlayerName from "@/components/HandleAccount/PlayerName/PlayerName.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref, type Ref } from "vue";
import $pubgService from "@/services/pubgService";

export default defineComponent({
  components: { Password, Email, PlayerName },
  name: "signup",
  emits: ["onCancelSignup"],

  setup(props, { emit }) {
    const loading = ref(false);

    function handleSignup() {
      $firebaseService.RegisterSubmit(
        email.value,
        password.value,
        $pubgService
      );
    }

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
      loading,
      handleSignup,
      handlePassword,
      handleEmail,
      cancelSignup,
    };
  },
});
