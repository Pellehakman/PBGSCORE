import { defineComponent, ref } from "vue";
import { showEyeIcon } from "@/models/enums";
import { getAuth } from "firebase/auth";

export default defineComponent({
  name: "Password",
  props: { editable: Boolean },
  emits: ["onPassword"],
  setup(props, { emit }) {
    const auth = getAuth();
    const displayPassword = ref(showEyeIcon.yes);
    const password = ref("");

    const placeholderPassword = ref("PASSWORD");
    if (auth.currentUser) {
      placeholderPassword.value = "NEW PASSWORD";
    }
    const handlePassword = (password: string) => {
      emit("onPassword", password);
      console.log(password);
    };

    const handleDisplayPassword = () => {
      if (displayPassword.value === showEyeIcon.yes) {
        displayPassword.value = showEyeIcon.no;
      } else {
        displayPassword.value = showEyeIcon.yes;
      }
    };
    console.log(props.editable);
    return {
      password,
      placeholderPassword,
      handleDisplayPassword,
      displayPassword,
      showEyeIcon,
      handlePassword,
    };
  },
});
