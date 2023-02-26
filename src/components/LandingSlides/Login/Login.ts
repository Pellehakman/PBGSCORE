import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login",
  components: { Password, Email },
  emits: ["onCancelLogin"],

  setup(props, { emit }) {
    function handleLogin() {
      $firebaseService.LoginSubmit(password.value, email.value);
    }
    const email = ref("");
    const handleEmail = (fromEmail: string) => {
      email.value = fromEmail;
    };

    const password = ref("");
    const handlePassword = (fromPassword: string) => {
      password.value = fromPassword;
    };

    const cancelLogin = () => {
      emit("onCancelLogin");
    };
    return { handleLogin, cancelLogin, handleEmail, handlePassword };
  },
});
