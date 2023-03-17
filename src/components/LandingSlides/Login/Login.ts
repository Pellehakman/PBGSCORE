import Email from "@/components/HandleAccount/Email/Email.vue";
import Password from "@/components/HandleAccount/Password/Password.vue";
import $fireAccount from "@/services/account/fireAccount";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "login",
  components: { Password, Email },
  emits: ["onCancelLogin", "onEnterSignup"],

  setup(props, { emit }) {
    const auth = getAuth();
    const loading = ref(false);
    const fireError = ref<string | undefined>("");

    const isLogin = ref(false);
    onAuthStateChanged(auth, async (user) => {
      if (user?.displayName) {
        isLogin.value = true;
      }
    });

    const handleLogin = async () => {
      loading.value = true;
      fireError.value = "";
      await $fireAccount.LoginSubmit(password.value, email.value);
      loading.value = false;
      fireError.value = $fireAccount.Error;
    };

    const handleLogout = async () => {
      await auth.signOut();
      location.reload();
      window.sessionStorage.clear();
    };
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
    const enterSignup = () => {
      emit("onEnterSignup");
    };

    return {
      handleLogout,
      enterSignup,
      handleLogin,
      cancelLogin,
      handleEmail,
      handlePassword,
      loading,
      isLogin,
      fireError,
    };
  },
});
