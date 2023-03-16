import { defineComponent, ref } from "vue";
import { showEyeIcon } from "@/models/enums";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineComponent({
  name: "Password",
  props: { edit: Boolean, editStyle: Boolean },
  emits: ["onPassword"],
  setup(props, { emit }) {
    const auth = getAuth();
    const isLogin = ref(false);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // email.value = user.email;
        isLogin.value = true;
      }
    });
    const displayPassword = ref(showEyeIcon.yes);
    const password = ref("");

    const placeholderPassword = ref("PASSWORD");
    if (auth.currentUser) {
      placeholderPassword.value = "NEW PASSWORD";
    }
    const handlePassword = (password: string) => {
      emit("onPassword", password);
    };

    const handleDisplayPassword = () => {
      if (displayPassword.value === showEyeIcon.yes) {
        displayPassword.value = showEyeIcon.no;
      } else {
        displayPassword.value = showEyeIcon.yes;
      }
    };

    return {
      isLogin,
      props,
      password,
      placeholderPassword,
      handleDisplayPassword,
      displayPassword,
      showEyeIcon,
      handlePassword,
    };
  },
});
