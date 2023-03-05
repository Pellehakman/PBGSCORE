import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $firebaseService from "@/services/FirebaseService";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login",
  components: { Password, Email },
  emits: ["onCancelLogin"],

  setup(props, { emit }) {
    const loading = ref(false);
    const fireError = ref<any>("");

    const handleLogin = async () => {
      loading.value = true;
      await $firebaseService.LoginSubmit(password.value, email.value);
      loading.value = false;
      fireError.value = $firebaseService.isError;
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

    const cancelLogin = () => {
      emit("onCancelLogin");
    };
    return {
      handleLogin,
      cancelLogin,
      handleEmail,
      handlePassword,
      loading,
      fireError,
    };
  },
});
